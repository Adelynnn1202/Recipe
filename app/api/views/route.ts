import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function POST(req: Request) {
  const { recipeId } = await req.json()
  if (!recipeId) return NextResponse.json({ error: 'recipeId required' }, { status: 400 })
  const session = getSession()
  await prisma.view.create({
    data: { recipeId, userId: session?.sub ?? null }
  })
  return NextResponse.json({ ok: true })
}
