import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const user = getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const recipe = await prisma.recipe.findUnique({ where: { id: params.id } })
  if (!recipe) return NextResponse.json({ error: 'Recipe not found' }, { status: 404 })
  if (!recipe.allowComments) return NextResponse.json({ error: 'Comments disabled' }, { status: 400 })
  const { content } = await req.json()
  const c = await prisma.comment.create({
    data: { recipeId: recipe.id, userId: user.sub, content }
  })
  return NextResponse.json(c)
}
