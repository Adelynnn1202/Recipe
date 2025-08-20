'use client'
import useSWR from 'swr'
import Link from 'next/link'
import { useState, useMemo } from 'react'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function HomePage() {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [maxTime, setMaxTime] = useState<string>('')      // minutes
  const [maxBudget, setMaxBudget] = useState<string>('')  // dollars (UI)
  const [sort, setSort] = useState<'newest'|'trending'>('newest')
  const [page, setPage] = useState(1)
  const pageSize = 24

  const url = useMemo(() => {
    const p = new URLSearchParams()
    if (q) p.set('q', q)
    if (category) p.set('category', category)
    if (difficulty) p.set('difficulty', difficulty)
    if (maxTime) p.set('maxTime', String(parseInt(maxTime, 10)))
    if (maxBudget) {
      const dollars = parseFloat(maxBudget)
      if (!isNaN(dollars)) p.set('maxBudget', String(Math.round(dollars * 100)))
    }
    p.set('sort', sort)
    p.set('page', String(page))
    p.set('pageSize', String(pageSize))
    return `/api/recipes?${p.toString()}`
  }, [q, category, difficulty, maxTime, maxBudget, sort, page])

  const { data, isLoading } = useSWR(url, fetcher)

  return (
    <div className="space-y-6">
      {/* Filters bar */}
      <div className="card p-4 grid md:grid-cols-6 gap-3">
        <input className="input md:col-span-2" placeholder="Search recipes, tags, looks..." value={q} onChange={e => { setQ(e.target.value); setPage(1) }} />

        <select className="select" value={category} onChange={e => { setCategory(e.target.value); setPage(1) }}>
          <option value="">All categories</option>
          {['MAKEUP','OUTFIT','NAILS','FOOD','DIY','FITNESS','TECH','LIFESTYLE'].map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select className="select" value={difficulty} onChange={e => { setDifficulty(e.target.value); setPage(1) }}>
          <option value="">Any difficulty</option>
          {['EASY','MEDIUM','HARD'].map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <input className="input" placeholder="Max time (min)" value={maxTime} onChange={e => { setMaxTime(e.target.value); setPage(1) }} />
        <input className="input" placeholder="Max budget ($)" value={maxBudget} onChange={e => { setMaxBudget(e.target.value); setPage(1) }} />

        <select className="select" value={sort} onChange={e => { setSort(e.target.value as any); setPage(1) }}>
          <option value="newest">Newest</option>
          <option value="trending">Trending</option>
        </select>
      </div>

      {/* Results */}
      {isLoading && <div>Loading…</div>}
      {!isLoading && data?.items?.length === 0 && <div className="text-sm text-neutral-500">No results match your filters.</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.items?.map((r: any) => (
          <Link key={r.id} href={`/recipe/${r.id}`} className="card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {r.coverImage ? <img src={r.coverImage} alt={r.title} className="w-full h-44 object-cover" /> : <div className="w-full h-44 bg-neutral-200" />}
            <div className="p-4 space-y-1">
              <div className="text-xs text-neutral-500">
                {r.category} · {r.difficulty}
                {r.estTimeMinutes ? ` · ${r.estTimeMinutes} min` : ''}
                {r.estCostCents ? ` · $${(r.estCostCents/100).toFixed(0)}` : ''}
              </div>
              <div className="font-semibold">{r.title}</div>
              <div className="text-xs text-neutral-500">{r.author.name} @{r.author.handle}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {data?.total > pageSize && (
        <div className="flex items-center justify-center gap-3">
          <button className="btn btn-ghost" disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</button>
          <div className="text-sm text-neutral-600">Page {page} of {Math.ceil((data?.total || 0) / pageSize)}</div>
          <button className="btn btn-ghost" disabled={page >= Math.ceil((data?.total || 0) / pageSize)} onClick={() => setPage(p => p + 1)}>Next</button>
        </div>
      )}
    </div>
  )
}
