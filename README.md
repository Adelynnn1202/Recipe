# Recipe – Full-stack MVP (Next.js + Prisma + SQLite)

This is a runnable MVP for your **Recipe** platform: a structured, shoppable how‑to site.
It includes auth, recipe creation, materials with affiliate offers, steps, comments, saves, and a simple feed.

## ✨ Features
- Next.js App Router (frontend + API routes)
- Prisma + SQLite (zero external setup)
- Auth (register/login) with bcrypt + httpOnly JWT cookies
- Create/view recipes with Materials → Offers (affiliate links) and Steps with media
- Comments (toggle-aware), Saves (bookmarks), basic search
- Tailwind CSS with clean components
- SEO-friendly model (HowTo-like structure in data model)

## 🚀 Quick start
1. Install deps
```bash
npm i
```
2. Create your `.env`:
```bash
cp .env.example .env
# put a long random value in JWT_SECRET
```
3. Set up the DB
```bash
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed
```
4. Start the app
```bash
npm run dev
```

Open http://localhost:3000.  
Login with the demo account from the seed:
- Email: `demo@recipe.app`
- Password: `password123`

## 🧩 Notes
- File uploads: this MVP takes URLs for media; you can serve local files from `/public/uploads`.
- Affiliate: Offers are just vendor+URL+price fields; connect real affiliate IDs later.
- Payments: Premium pricing fields exist; wire to Stripe in a follow-up iteration.
- Auth: Cookie-based JWT for simplicity; you can swap to NextAuth or Clerk later.

## 📚 Prisma ERD (conceptual)
- User (role: VIEWER|CREATOR|ADMIN) 1—* Recipe
- Recipe 1—* Material 1—* Offer
- Recipe 1—* Step (ordered by index)
- Recipe 1—* Comment (by User)
- Recipe 1—* Save (by User)
- Recipe (optional) — parentRecipeId → remix linkage

## 🛣 Roadmap to “full”
- Creator analytics dashboards
- Remix flow (create derived recipes)
- “Tried it” posts with images
- Bundled “Add all to cart” across vendors
- Premium unlock + Stripe
- Advanced search facets (difficulty, time, budget)
- Moderation & reporting, plagiarism checks
- Brand challenges & sponsorships
