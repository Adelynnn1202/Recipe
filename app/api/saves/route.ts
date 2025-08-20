import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function POST(req: Request) {
  const user = getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { recipeId } = await req.json()
  await prisma.save.upsert({
    where: { recipeId_userId: { recipeId, userId: user.sub } } as any,
    update: {},
    create: { recipeId, userId: user.sub }
  })
  return NextResponse.json({ ok: true })
}

export async function GET() {
  const user = getSession()
  if (!user) return NextResponse.json([], { status: 200 })
  const saves = await prisma.save.findMany({
    where: { userId: user.sub },
    include: { recipe: { select: { id: true, title: true, coverImage: true, category: true } } },
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(saves)
}
