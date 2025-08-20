import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const JWT_NAME = 'recipe_token'

export function setSession(user: { id: string, email: string, name: string, handle: string, role: string }) {
  const secret = process.env.JWT_SECRET!
  const token = jwt.sign({ sub: user.id, email: user.email, name: user.name, handle: user.handle, role: user.role }, secret, { expiresIn: '7d' })
  cookies().set(JWT_NAME, token, { httpOnly: true, sameSite: 'lax', secure: false, path: '/' })
}

export function clearSession() {
  cookies().delete(JWT_NAME)
}

export function getSession(): null | { sub: string, email: string, name: string, handle: string, role: string } {
  const token = cookies().get(JWT_NAME)?.value
  if (!token) return null
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as any
    return payload
  } catch {
    return null
  }
}
