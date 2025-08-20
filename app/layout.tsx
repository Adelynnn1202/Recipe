import './globals.css'
import '../src/styles/globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getSession } from '@/lib/auth'
import UserNav from '@/components/UserNav'

export const metadata: Metadata = {
  title: 'Recipe – How-to, but structured & shoppable',
  description: 'Create, share, and shop structured recipes for makeup, outfits, food, DIY, and more.'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Server-side read of the JWT cookie
  const session = getSession()

  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="font-semibold">Recipe</Link>
            <nav className="flex gap-3 items-center">
              <Link href="/create" className="btn btn-primary">Create</Link>
              <UserNav session={session} />
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t">
          <div className="container py-10 text-sm text-neutral-500">
            © {new Date().getFullYear()} Recipe
          </div>
        </footer>
      </body>
    </html>
  )
}
