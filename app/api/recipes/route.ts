import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

const DEFAULT_PAGE_SIZE = 24
const TRENDING_WINDOW_DAYS = 14

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const q = searchParams.get('q') || undefined
  const category = searchParams.get('category') || undefined
  const difficulty = searchParams.get('difficulty') || undefined
  const maxTime = toInt(searchParams.get('maxTime'))
  const maxBudget = toInt(searchParams.get('maxBudget'))
  const sort = (searchParams.get('sort') || 'newest').toLowerCase()
  const page = Math.max(1, toInt(searchParams.get('page')) || 1)
  const pageSize = Math.min(50, Math.max(6, toInt(searchParams.get('pageSize')) || DEFAULT_PAGE_SIZE))

  const where: any = {}
  if (q) {
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { tagsCsv: { contains: q, mode: 'insensitive' } }
    ]
  }
  if (category) where.category = category
  if (difficulty) where.difficulty = difficulty
  if (maxTime) where.estTimeMinutes = { lte: maxTime }
  if (maxBudget) where.estCostCents = { lte: maxBudget }

  if (sort === 'newest') {
    const [total, list] = await Promise.all([
      prisma.recipe.count({ where }),
      prisma.recipe.findMany({
        where,
        select: {
          id: true, title: true, coverImage: true, category: true, tagsCsv: true,
          difficulty: true, estTimeMinutes: true, estCostCents: true,
          createdAt: true,
          author: { select: { handle: true, name: true } },
          _count: { select: { saves: true, comments: true } }
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize
      })
    ])
    const items = list.map(r => ({ ...r, tags: r.tagsCsv.split(',').map(t => t.trim()).filter(Boolean) }))
    return NextResponse.json({ total, page, pageSize, items })
  }

  // Trending
  const since = new Date(Date.now() - TRENDING_WINDOW_DAYS * 24 * 60 * 60 * 1000)
  const candidates = await prisma.recipe.findMany({
    where,
    select: {
      id: true, title: true, coverImage: true, category: true, tagsCsv: true,
      difficulty: true, estTimeMinutes: true, estCostCents: true,
      createdAt: true,
      author: { select: { handle: true, name: true } },
      _count: { select: { saves: true, comments: true } }
    },
    orderBy: { createdAt: 'desc' },
    take: 200
  })
  if (candidates.length === 0) return NextResponse.json({ total: 0, page, pageSize, items: [] })

  const ids = candidates.map(c => c.id)
  const [viewCounts, saveCounts, commentCounts] = await Promise.all([
    prisma.view.groupBy({
      by: ['recipeId'],
      where: { recipeId: { in: ids }, createdAt: { gte: since } },
      _count: { recipeId: true }
    }),
    prisma.save.groupBy({
      by: ['recipeId'],
      where: { recipeId: { in: ids }, createdAt: { gte: since } },
      _count: { recipeId: true }
    }),
    prisma.comment.groupBy({
      by: ['recipeId'],
      where: { recipeId: { in: ids }, createdAt: { gte: since } },
      _count: { recipeId: true }
    })
  ])
  const viewsMap = new Map(viewCounts.map(r => [r.recipeId, r._count.recipeId]))
  const savesMap = new Map(saveCounts.map(r => [r.recipeId, r._count.recipeId]))
  const commentsMap = new Map(commentCounts.map(r => [r.recipeId, r._count.recipeId]))

  const scored = candidates.map(r => {
    const v = viewsMap.get(r.id) || 0
    const s = savesMap.get(r.id) || 0
    const c = commentsMap.get(r.id) || 0
    const score = 0.2 * v + 0.5 * s + 0.3 * c
    return { r, score }
  }).sort((a, b) => b.score - a.score)

  const total = scored.length
  const slice = scored.slice((page - 1) * pageSize, page * pageSize)
  const items = slice.map(({ r }) => ({ ...r, tags: r.tagsCsv.split(',').map(t => t.trim()).filter(Boolean) }))
  return NextResponse.json({ total, page, pageSize, items })
}

export async function POST(req: Request) {
  const user = getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const {
    title, coverImage, category, tags, difficulty, estTimeMinutes, estCostCents,
    allowComments, priceCents, premium, parentRecipeId, materials, steps
  } = body

  const tagsCsv = Array.isArray(tags) ? tags.join(',') : ''
  const recipe = await prisma.recipe.create({
    data: {
      title, coverImage, category, tagsCsv, difficulty,
      estTimeMinutes, estCostCents, allowComments, priceCents, premium, parentRecipeId,
      authorId: user.sub,
      materials: {
        create: (materials || []).map((m: any) => ({
          name: m.name, quantity: m.quantity, notes: m.notes,
          offers: {
            create: (m.offers || []).map((o: any) => ({
              vendor: o.vendor, product: o.product, url: o.url, priceCents: o.priceCents, currency: o.currency
            }))
          }
        }))
      },
      steps: {
        create: (steps || []).map((s: any, i: number) => ({
          index: s.index ?? i + 1, text: s.text, mediaUrl: s.mediaUrl
        }))
      }
    }
  })
  return NextResponse.json({ id: recipe.id })
}

function toInt(v: string | null) {
  if (!v) return undefined
  const n = parseInt(v, 10)
  return Number.isFinite(n) ? n : undefined
}
