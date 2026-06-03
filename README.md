# Hudoor — حضور

A Deen-based mindfulness & self-improvement PWA built on Qur'an and Sunnah.
Next.js 15 (App Router) · Supabase (Auth + Postgres + RLS) · Bilingual EN/اردو · Installable PWA.

## Features (MVP)
1. **Dashboard** — daily focus, prayer streak, tap-tasbih, daily ayah, mood check-in, quick access
2. **Salah Tracker** — log all 5 daily prayers (in congregation / prayed / qaza / missed) with streak + daily count
3. **Salah Companion** — before (grounding) → during (presence prompts) → after (adhkar) → focus score
4. **Azkar Tracker** — morning / evening / anytime adhkar with tap counters toward target counts
5. **Sunnahs + Tracker** — a library of daily Sunnahs (with sources) you check off each day
6. **Duas with Meaning** — Arabic, transliteration, translation, *why it's taught*, trait it builds, source
7. **Islamic Mindfulness** — guided wudu / sleep / anger flows
8. **Emotion → Guidance** — pick a feeling, get an ayah + hadith + dua + one small action
9. **Character Building** — traits (sabr, shukr, hilm, tawakkul) with 7/30/lifelong journeys & daily challenges
10. **Reflection** — daily ayah journaling

Bilingual everywhere with instant EN ⇄ اردو toggle and full RTL.

**Gender-aware experience:** on first open, users can optionally choose male/female
(stored privately in their own RLS-protected profile row — never sent to OAuth
providers, changeable or removable anytime in Settings). Male users see the "in
congregation" prayer option; female users get a **Monthly Companion** (`/monthly`)
with reminders, motivation, and the acts of worship that continue during
menstruation. Content is general and non-madhhab-specific, with a note to consult
a scholar for personal rulings.

> **Updating an existing Supabase project?** The schema now also adds a `gender`
> column to `profiles` and a new `hayd_logs` table (plus the earlier `status`
> column on `prayer_logs` and `sunnah_logs` table). Re-running
> `supabase/schema.sql` is safe — it uses `create table if not exists` and
> `add column if not exists` guards.

---

## 1. Prerequisites
- Node.js 18.18+ (Node 20 recommended)
- A free [Supabase](https://supabase.com) account
- A [GitHub](https://github.com) account and a [Vercel](https://vercel.com) account

## 2. Run locally
```bash
npm install
cp .env.example .env.local      # then fill in your Supabase values (step 3)
npm run dev                     # http://localhost:3000
```

---

## 3. Set up Supabase (do this first)

1. Go to **supabase.com → New project**. Pick a name, a strong database password, and a region close to your users. Wait ~2 min for it to provision.
2. In the project, open **Project Settings → API**. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Put those two values in `.env.local` (local) and later in Vercel (step 5).
4. Open **SQL Editor → New query**, paste the entire contents of [`supabase/schema.sql`](./supabase/schema.sql), and click **Run**. This creates every table, enables Row-Level Security so users only see their own data, and adds a trigger that auto-creates a profile row on signup.
5. Open **Authentication → Providers**:
   - **Email** is on by default. For quick testing, turn **"Confirm email"** off (Authentication → Providers → Email) so you can sign in immediately. Turn it back on before launch.
   - **(Optional) Google:** enable the Google provider and paste your Google OAuth client ID/secret (from Google Cloud Console → Credentials). Then add your redirect URL — see step 6.
6. Open **Authentication → URL Configuration**:
   - **Site URL:** `http://localhost:3000` for dev, your Vercel URL for prod.
   - **Redirect URLs:** add both
     `http://localhost:3000/auth/callback`
     `https://YOUR-APP.vercel.app/auth/callback`

That's it — auth and database are ready.

---

## 4. Push to GitHub
```bash
git init
git add .
git commit -m "Hudoor MVP"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hudoor.git
git push -u origin main
```
> `.env.local` is git-ignored, so your keys are never committed.

## 5. Deploy to Vercel
1. Go to **vercel.com → Add New → Project** and import your `hudoor` GitHub repo.
2. Framework preset auto-detects **Next.js** — leave defaults.
3. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**. Every future `git push` to `main` auto-deploys.
5. Copy your live URL, then go back to **Supabase → Authentication → URL Configuration** and add it as Site URL + `…/auth/callback` redirect (step 3.6).

## 6. Install as an app (PWA)
Open the deployed site on a phone → browser menu → **Add to Home Screen**. It launches standalone, works offline for cached pages, and uses the gold-on-green icon.

---

## Project structure
```
src/
  app/
    layout.tsx            root layout, fonts, providers
    page.tsx              redirects → /dashboard
    login/                email/password + Google auth
    auth/callback/        OAuth code exchange
    dashboard/  salah/  duas/  mindfulness/  emotions/  character/  reflection/
    fonts/                bundled Noto Naskh Arabic + Nastaliq Urdu
  components/             ui.tsx (nav, header, toggle), shell.tsx, sw-register.tsx
  lib/
    supabase-client.ts    browser client
    supabase-server.ts    server client
    data.ts               logging helpers (prayer, dhikr, mood, journal, character)
    content.ts            seed content (duas, ayat, emotions, traits, mindfulness)
    i18n.ts               bilingual UI strings
    lang-context.tsx      language state + RTL
  middleware.ts           session refresh + route protection
supabase/schema.sql       full DB schema + RLS + trigger
public/                   manifest.json, sw.js, icons/
```

## Content & authenticity
All Qur'an/hadith/dua content in `src/lib/content.ts` is drawn from widely-known
authenticated sources (Qur'an; Sahih al-Bukhari/Muslim; Abu Dawud; Tirmidhi; Hisnul
Muslim) with a source reference on each item. **Have a qualified scholar review the
content before any public launch.** To add or edit content, edit `content.ts` — no
database change needed.

## Customizing
- **Colors/theme:** `tailwind.config.ts` (`deen` palette)
- **UI strings:** `src/lib/i18n.ts`
- **Content:** `src/lib/content.ts`
