import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import * as bcrypt from 'bcryptjs'
import { setSession } from '@/lib/auth'


export async function POST(req: Request) {
  const body = await req.json()
  const { email, password, name, handle } = body
  if (!email || !password || !name || !handle) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }
  const exists = await prisma.user.findUnique({ where: { email } })
  const handleExists = await prisma.user.findUnique({ where: { handle } })
  if (exists || handleExists) {
    return NextResponse.json({ error: 'Email or handle already in use' }, { status: 400 })
  }
  const hash = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: { email, password: hash, name, handle, role: 'CREATOR' }
  })
  setSession({ id: user.id, email: user.email, name: user.name, handle: user.handle, role: user.role })
  return NextResponse.json({ ok: true })
}
