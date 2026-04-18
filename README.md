# Matos Legal, PLLC — Website

Bilingual (EN/ES) Next.js 14 website for Matos Legal, PLLC, a South Florida civil litigation firm.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the middleware will redirect to `/en` or `/es` based on your browser language.

## Environment Variables

| Variable | Description |
|---|---|
| `GHL_WEBHOOK_URL` | GoHighLevel webhook URL for lead form POST submissions |

## Swapping the GHL Form Embed

The contact form in `components/sections/ContactForm.tsx` is a fallback form that POSTs to `/api/lead`. Once your GHL form is built:

1. Open `components/sections/ContactForm.tsx`
2. Replace the entire form JSX with your GHL iframe embed
3. The TODO comment at the top of that file marks the exact location

```tsx
// TODO: Replace this component with GHL native form embed iframe
// once form is built in GHL dashboard. Keep fallback working until then.
```

## Adding / Editing Content

All text content lives in two files:

- `content/en.ts` — English
- `content/es.ts` — Spanish

Both files share the same TypeScript type (`Content` from `content/en.ts`). Edit the values; the site auto-reloads in dev and redeployment picks up changes in production.

## Deploying

### Vercel (recommended)

Connect your GitHub repo in the Vercel dashboard. Set `GHL_WEBHOOK_URL` in Vercel:
Project → Settings → Environment Variables.

Or via CLI:

```bash
npm run build   # verify zero errors first
vercel --prod
```

## Project Structure

```
app/[locale]/          Pages (home, attorney-profile, practice-areas, contact, resources)
components/layout/     Nav, TopBar, Footer, LanguageToggle
components/sections/   Page sections (Hero, AboutFirm, Testimonials, etc.)
components/primitives/ Reusable atoms (Button, IconCard, SectionHeading, etc.)
content/               en.ts + es.ts — all copy
lib/                   i18n helpers, utils
middleware.ts          Locale detection & redirect
```
