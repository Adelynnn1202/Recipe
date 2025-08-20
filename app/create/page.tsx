'use client'
import { useState } from 'react'

type Material = { name: string; quantity?: string; notes?: string; offers: { vendor: string; product?: string; url: string; priceCents?: number; currency?: string }[] }
type Step = { index?: number; text: string; mediaUrl?: string }

export default function CreateRecipePage() {
  const [title, setTitle] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [category, setCategory] = useState('MAKEUP')
  const [tags, setTags] = useState('glow,summer,beginner')
  const [difficulty, setDifficulty] = useState('EASY')
  const [estTimeMinutes, setEstTimeMinutes] = useState<number | ''>('' as any)
  const [estCostCents, setEstCostCents] = useState<number | ''>('' as any)
  const [allowComments, setAllowComments] = useState(true)
  const [premium, setPremium] = useState(false)
  const [priceCents, setPriceCents] = useState<number | ''>('' as any)
  const [materials, setMaterials] = useState<Material[]>([])
  const [steps, setSteps] = useState<Step[]>([])

  function addMaterial() {
    setMaterials(m => [...m, { name: '', offers: [] }])
  }
  function addOffer(i: number) {
    setMaterials(ms => ms.map((m, idx) => idx === i ? { ...m, offers: [...m.offers, { vendor: '', url: '' }] } : m))
  }
  function addStep() {
    setSteps(s => [...s, { text: '' }])
  }
  async function createRecipe() {
    const payload = {
      title, coverImage, category,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      difficulty, estTimeMinutes: estTimeMinutes || null, estCostCents: estCostCents || null,
      allowComments, premium, priceCents: premium ? (priceCents || 0) : null,
      materials, steps
    }
    const res = await fetch('/api/recipes', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) {
      const { id } = await res.json()
      window.location.href = `/recipe/${id}`
    } else {
      alert('Please log in and complete required fields.')
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Create a Recipe</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="label">Title</div>
            <input className="input" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <div className="label">Cover Image URL</div>
            <input className="input" value={coverImage} onChange={e => setCoverImage(e.target.value)} placeholder="/uploads/cover.jpg or https://..." />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="label">Category</div>
              <select className="select" value={category} onChange={e => setCategory(e.target.value)}>
                {['MAKEUP','OUTFIT','NAILS','FOOD','DIY','FITNESS','TECH','LIFESTYLE'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <div className="label">Difficulty</div>
              <select className="select" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                {['EASY','MEDIUM','HARD'].map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
          </div>
          <div>
            <div className="label">Tags (comma separated)</div>
            <input className="input" value={tags} onChange={e => setTags(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="label">Est. Time (min)</div>
              <input className="input" type="number" value={estTimeMinutes as any} onChange={e => setEstTimeMinutes(Number(e.target.value))} />
            </div>
            <div>
              <div className="label">Est. Cost (cents)</div>
              <input className="input" type="number" value={estCostCents as any} onChange={e => setEstCostCents(Number(e.target.value))} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2"><input type="checkbox" checked={allowComments} onChange={e => setAllowComments(e.target.checked)} /> Allow comments</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={premium} onChange={e => setPremium(e.target.checked)} /> Premium</label>
            {premium && (
              <input className="input" type="number" placeholder="Price in cents" value={priceCents as any} onChange={e => setPriceCents(Number(e.target.value))} />
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="label">Materials</div>
            <div className="space-y-3">
              {materials.map((m, i) => (
                <div key={i} className="card p-4 space-y-2">
                  <input className="input" placeholder="Name" value={m.name} onChange={e => setMaterials(ms => ms.map((x, idx) => idx===i?{...x, name: e.target.value}:x))} />
                  <div className="grid grid-cols-2 gap-2">
                    <input className="input" placeholder="Quantity (e.g. 1, 30ml)" value={m.quantity || ''} onChange={e => setMaterials(ms => ms.map((x, idx) => idx===i?{...x, quantity: e.target.value}:x))} />
                    <input className="input" placeholder="Notes" value={m.notes || ''} onChange={e => setMaterials(ms => ms.map((x, idx) => idx===i?{...x, notes: e.target.value}:x))} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-neutral-600">Offers</div>
                    {m.offers.map((o, j) => (
                      <div key={j} className="grid grid-cols-3 gap-2">
                        <input className="input" placeholder="Vendor (Amazon, Sephora, ...)" value={o.vendor} onChange={e => setMaterials(ms => ms.map((x, idx) => idx===i?{...x, offers: x.offers.map((y, k) => k===j?{...y, vendor: e.target.value}:y)}:x))} />
                        <input className="input" placeholder="URL" value={o.url} onChange={e => setMaterials(ms => ms.map((x, idx) => idx===i?{...x, offers: x.offers.map((y, k) => k===j?{...y, url: e.target.value}:y)}:x))} />
                        <input className="input" placeholder="Price (cents)" type="number" value={o.priceCents || ''} onChange={e => setMaterials(ms => ms.map((x, idx) => idx===i?{...x, offers: x.offers.map((y, k) => k===j?{...y, priceCents: Number(e.target.value)}:y)}:x))} />
                      </div>
                    ))}
                    <button className="btn btn-ghost" onClick={() => addOffer(i)}>+ Add offer</button>
                  </div>
                </div>
              ))}
              <button className="btn btn-ghost" onClick={addMaterial}>+ Add material</button>
            </div>
          </div>

          <div>
            <div className="label">Steps</div>
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className="card p-4 space-y-2">
                  <textarea className="textarea" placeholder={`Step ${i+1} text`} value={s.text} onChange={e => setSteps(ss => ss.map((x, idx) => idx===i?{...x, text: e.target.value}:x))} />
                  <input className="input" placeholder="Media URL (optional)" value={s.mediaUrl || ''} onChange={e => setSteps(ss => ss.map((x, idx) => idx===i?{...x, mediaUrl: e.target.value}:x))} />
                </div>
              ))}
              <button className="btn btn-ghost" onClick={addStep}>+ Add step</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-primary" onClick={createRecipe}>Publish</button>
      </div>
    </div>
  )
}
