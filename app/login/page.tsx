'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit() {
    const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    if (res.ok) window.location.href = '/'
    else alert('Invalid credentials')
  }

  return (
    <div className="max-w-md mx-auto card p-6 space-y-4">
      <h1 className="text-xl font-semibold">Log in</h1>
      <input className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary w-full" onClick={submit}>Log in</button>
    </div>
  )
}
