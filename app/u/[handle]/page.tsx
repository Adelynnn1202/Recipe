import { prisma } from '@/lib/prisma'

export default async function ProfilePage({ params }: { params: { handle: string } }) {
  const user = await prisma.user.findUnique({
    where: { handle: params.handle },
    select: {
      id: true, name: true, handle: true, createdAt: true,
      recipes: {
        select: { id: true, title: true, coverImage: true, category: true },
        orderBy: { createdAt: 'desc' }
      }
    }
  })

  if (!user) return <div className="text-sm text-neutral-600">User not found.</div>

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          {user.name} <span className="text-neutral-500">@{user.handle}</span>
        </h1>
        <div className="text-sm text-neutral-500">
          Joined {new Date(user.createdAt).toLocaleDateString()}
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold">Recipes</h2>
        {user.recipes.length === 0 && (
          <div className="text-sm text-neutral-500">No recipes yet.</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {user.recipes.map(r => (
            <a key={r.id} href={`/recipe/${r.id}`} className="card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {r.coverImage
                ? <img src={r.coverImage} alt={r.title} className="w-full h-44 object-cover" />
                : <div className="w-full h-44 bg-neutral-200" />
              }
              <div className="p-4 space-y-1">
                <div className="text-xs text-neutral-500">{r.category}</div>
                <div className="font-medium">{r.title}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
