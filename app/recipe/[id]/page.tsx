'use client'
import useSWR from 'swr'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: r, mutate } = useSWR(`/api/recipes/${id}`, fetcher)
  const [comment, setComment] = useState('')

  // ✅ log a view once per page load
  useEffect(() => {
    if (!id) return
    fetch('/api/views', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipeId: id })
    }).catch(() => {})
  }, [id])

  if (!r) return <div>Loading...</div>

  async function saveRecipe() {
    await fetch('/api/saves', {
      method: 'POST',
      body: JSON.stringify({ recipeId: id }),
      headers: { 'Content-Type': 'application/json' }
    })
    alert('Saved!')
  }

  async function postComment() {
    const res = await fetch(`/api/recipes/${id}/comments`, {
      method: 'POST',
      body: JSON.stringify({ content: comment }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (res.ok) { setComment(''); mutate() } else { alert('Login and ensure comments are enabled.') }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-neutral-500">{r.category}</div>
          <h1 className="text-2xl font-semibold">{r.title}</h1>
          <div className="text-sm text-neutral-500">by {r.author.name} @{r.author.handle}</div>
        </div>
        <button className="btn btn-primary" onClick={saveRecipe}>Save</button>
      </div>

      {r.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={r.coverImage} alt={r.title} className="w-full max-h-[420px] object-cover rounded-2xl" />
      )}

      <section className="grid md:grid-cols-2 gap-8">
        <div className="card p-5">
          <h2 className="font-semibold mb-3">Materials</h2>
          <ul className="space-y-3">
            {r.materials.map((m: any) => (
              <li key={m.id}>
                <div className="font-medium">
                  {m.name}{m.quantity ? ` — ${m.quantity}` : ''}
                </div>
                {m.offers?.length > 0 && (
                  <div className="text-sm text-neutral-600 flex flex-wrap gap-2 mt-1">
                    {m.offers.map((o: any) => (
                      <a key={o.id} href={o.url} target="_blank" rel="noreferrer" className="underline">
                        Buy on {o.vendor}{o.priceCents ? ` ($${(o.priceCents/100).toFixed(2)})` : ''}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-5">
          <h2 className="font-semibold mb-3">Steps</h2>
          <ol className="space-y-4 list-decimal list-inside">
            {r.steps.map((s: any) => (
              <li key={s.id} className="space-y-2">
                <div>{s.text}</div>
                {s.mediaUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.mediaUrl} alt="" className="rounded-xl max-h-64 object-cover" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">Comments</h2>
        {r.comments?.length === 0 && (
          <div className="text-sm text-neutral-500">No comments yet.</div>
        )}
        <div className="space-y-3">
          {r.comments?.map((c: any) => (
            <div key={c.id} className="card p-4">
              <div className="text-sm font-medium">{c.user.name} @{c.user.handle}</div>
              <div className="text-sm">{c.content}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="input"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button className="btn btn-primary" onClick={postComment}>Post</button>
        </div>
      </section>
    </div>
  )
}
