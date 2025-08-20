'use client'
import Link from 'next/link'

type Session = {
  sub: string
  email: string
  name: string
  handle: string
  role: string
} | null

export default function UserNav({ session }: { session: Session }) {
  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    window.location.href = '/'
  }

  if (!session) {
    return (
      <div className="flex gap-2">
        <Link href="/login" className="btn btn-ghost">Log in</Link>
        <Link href="/register" className="btn btn-ghost">Sign up</Link>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-neutral-600 hidden sm:block">
        Hi, {session.name || session.handle}
      </span>
      <Link href={`/u/${session.handle}`} className="btn btn-ghost">
        @{session.handle}
      </Link>
      <button onClick={logout} className="btn btn-primary">Log out</button>
    </div>
  )
}
