import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const r = await prisma.recipe.findUnique({
    where: { id: params.id },
    include: {
      author: { select: { name: true, handle: true } },
      materials: { include: { offers: true } },
      steps: { orderBy: { index: 'asc' } },
      comments: {
        include: { user: { select: { handle: true, name: true } } },
        orderBy: { createdAt: 'desc' },
        take: 50
      },
      _count: { select: { saves: true } }
    }
  })
  if (!r) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const withTags = {
    ...r,
    tags: (r as any).tagsCsv?.split(',').map((t: string) => t.trim()).filter(Boolean) ?? []
  }
  return NextResponse.json(withTags)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const user = getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const existing = await prisma.recipe.findUnique({ where: { id: params.id } })
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (existing.authorId !== user.sub && user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await req.json()
  const tagsCsv =
    Array.isArray(body.tags) ? body.tags.join(',') :
    typeof body.tags === 'string' ? body.tags :
    (existing as any).tagsCsv

  const recipe = await prisma.recipe.update({
    where: { id: params.id },
    data: {
      title: body.title,
      coverImage: body.coverImage,
      category: body.category,
      tagsCsv,
      difficulty: body.difficulty,
      estTimeMinutes: body.estTimeMinutes,
      estCostCents: body.estCostCents,
      allowComments: body.allowComments,
      priceCents: body.priceCents,
      premium: body.premium
    }
  })
  return NextResponse.json(recipe)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const user = getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const existing = await prisma.recipe.findUnique({ where: { id: params.id } })
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (existing.authorId !== user.sub && user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  await prisma.recipe.delete({ where: { id: params.id } })
  return NextResponse.json({ ok: true })
}