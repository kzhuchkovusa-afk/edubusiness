# GoCoding Site — Architecture & Map

> Maintenance guide for **profitforafterschool.com**. Start here before changing anything.

This document is the map: every route, every component, where content lives, and the
conventions that keep the site consistent. Keep it updated when you add a page or component.

---

## 1. What this is

Marketing site for **GoCoding** — licensed STEM curriculum (Coding, Robotics, Creativity,
Science) for afterschool and tutoring centers. The site is a set of conversion-focused
landing pages; the single primary action everywhere is **Get a Free Demo Lesson**.

### Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Output | Static export — `output: 'export'`, `trailingSlash: true` (see `next.config.mjs`) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 (`tailwind.config.ts`) + CSS variables in `src/styles/globals.css` |
| Icons | `lucide-react` |
| Class helper | `clsx` via `cn()` in `src/lib/utils.ts` |
| Hosting | Netlify — config in `netlify.toml` |
| Domain | `profitforafterschool.com` |
| Forms | Netlify Forms (no backend) |

There is **no server runtime, no database, no CMS**. Every page is pre-rendered to static
HTML. The build output lands in `out/`.

### Commands

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # static export to out/  — run before every commit
npm run lint
```

---

## 2. Site map — all routes

All pages live in `src/app/<route>/page.tsx`. Each owns its `metadata` export (title,
description, canonical, Open Graph).

| URL | File | Purpose | Notable |
|---|---|---|---|
| `/` | `app/page.tsx` | Homepage — 11-block compact offer page | Inline content. Uses `ProgramRoadmap`, `BusinessCalculator`, `BestPriceGuarantee` |
| `/programs` | `app/programs/page.tsx` | Full program catalog — 8 sections, 3 tracks | Uses `ProgramsMatrix`, `ProgramCard`, `TrackNav`; content from `catalog.json` |
| `/pricing` | `app/pricing/page.tsx` | Pricing — 11 sections, ROI scenarios, competitor table | Inline content |
| `/about` | `app/about/page.tsx` | About — 8 sections, values manifesto | Inline content; uses the Lora serif font |
| `/contact` | `app/contact/page.tsx` | Booking page + free-summer-program offer | Renders `ContactForm` (Netlify form `call-booking`) |
| `/for-tutoring-centers` | `app/for-tutoring-centers/page.tsx` | Landing — centers with **no** coding (LAUNCH framing) | **JSON-driven** — the only page rendered from `src/content/landing-pages/` |
| `/for-coding-centers` | `app/for-coding-centers/page.tsx` | Landing — centers that **already** teach coding (UPGRADE framing), 14 sections | Inline content |
| `/for-afterschool-centers` | `app/for-afterschool-centers/page.tsx` | Landing — multi-subject afterschool centers, "add STEM without hiring" framing | Converter: `AfterschoolDemoForm` (Netlify form `afterschool-demo`) |
| `/for-language-schools` | `app/for-language-schools/page.tsx` | Hub — compact router to the 4 community pages | No scroll; 4 cards |
| `/for-chinese-schools` | `app/for-chinese-schools/page.tsx` | Community landing — enrichment-block framing | Killer element: `EnrichmentCalculator` |
| `/for-russian-schools` | `app/for-russian-schools/page.tsx` | Community landing — bilingual (RU headline / EN body) | Killer element: `LossCascade` |
| `/for-korean-schools` | `app/for-korean-schools/page.tsx` | Community landing — pilot-program framing | Converter: `PilotForm` (Netlify form `korean-pilot`) |
| `/for-spanish-schools` | `app/for-spanish-schools/page.tsx` | Community landing — Spanish afterschool/immersion, "3rd-grade bridge" framing | Converter: `SpanishDemoForm` (Netlify form `spanish-demo`) |

Non-page routes in `src/app/`:

| File | Role |
|---|---|
| `layout.tsx` | Root layout — fonts, global `<head>` metadata, `Header` / `Footer` / `StickyCTA` / `RevealScript` |
| `not-found.tsx` | 404 page (exported as `out/404.html`, served by Netlify) |
| `sitemap.ts` | Generates `sitemap.xml` — **add new routes to the `paths` array here** |
| `robots.ts` | Generates `robots.txt` |

### Two landing-page generations (important)

There are **two families** of landing pages — know which you are editing:

1. **`/for-tutoring-centers`** — the original. Content lives in
   `src/content/landing-pages/tutoring-centers.json` and is rendered through the
   JSON-driven `landing/` components (`HeroSection`, `ProblemSection`, … `CTASection`).
2. **Every other `/for-*` page and the homepage** — self-contained. Content is inline
   (`const` arrays at the top of the page file). They reuse shared components and the
   newer landing components, but are not JSON-driven.

When adding a new audience page, follow pattern #2 (self-contained) — it is the current
convention. See §8.

---

## 3. Directory layout

```
src/
  app/                      Routes (see §2)
  components/
    layout/                 Site chrome — Header, Footer, nav, sticky bar
    shared/                 Generic primitives reused everywhere
    landing/                Building blocks for /for-* landing pages
    home/                   Homepage-only interactive blocks
    programs/               /programs-only blocks
    contact/                Contact form
  content/                  JSON content (see §5)
  lib/                      Helpers — content loader, site URL, cn()
  styles/globals.css        Tailwind layers + CSS variables + .reveal
public/
  __forms.html              Hidden form definitions for Netlify (see §6)
  favicon.svg, images/      Static assets
```

---

## 4. Component catalog

`(c)` = client component (`'use client'`). Everything else is a server component.

### `components/layout/` — site chrome (rendered once in `layout.tsx`)

| Component | Purpose |
|---|---|
| `Header` | Sticky top bar — logo, desktop nav, demo CTA, mobile menu trigger |
| `Navigation` | Desktop nav — flat links + a "For Your Business" dropdown for segment pages. **Exports `NAV_LINKS`** (top-level) and **`SEGMENT_LINKS`** (the `/for-*` pages) |
| `MobileMenu` (c) | Full-screen mobile menu. Rendered via a **portal to `document.body`** so the header's `backdrop-blur` does not trap the `fixed` overlay |
| `Footer` | Footer — link columns, `gocoding.tech` link, socials |
| `Logo` | Logo lockup. `withTagline` prop adds the descriptor + values line |
| `StickyCTA` (c) | Bottom sticky demo CTA; hides when `#final-cta` is in view |

### `components/shared/` — generic primitives

| Component | Purpose |
|---|---|
| `Container` | Max-width (1200px) centered wrapper |
| `Section` | Vertical-padded `<section>` + `Container`. Props: `tone` (`default`/`surface`/`muted`), `id` |
| `SectionHeading` | Eyebrow + `<h2>` + description |
| `Button` | Link or button. Variants `primary`/`outline`/`ghost`/`accent`; auto-detects external URLs |
| `Badge` | Small pill label. Tones `primary`/`accent`/`warning`/`danger`/`neutral` |
| `Card` | Bordered rounded card |
| `Icon` | Maps a string name → a `lucide-react` icon (used by JSON-driven components) |
| `StatCounter` (c) | Count-up number animation on scroll |
| `RevealScript` (c) | Drives `.reveal` scroll animations; re-runs on route change |
| `CTABanner` | Reusable gradient CTA strip |
| `BestPriceGuarantee` | Best-price guarantee block — used on `/` and `/pricing` |

### `components/landing/` — landing-page blocks

**JSON-driven set** (used only by `/for-tutoring-centers`, prop-driven):
`HeroSection`, `ProblemSection`, `SolutionSection`, `ComparisonTable`, `SocialProof`,
`BenefitsSection`, `WhatYouGet`, `GuaranteeSection`, `PricingSection`, `BonusesSection`,
`UrgencySection`, `CTASection`.

**Newer reusable blocks** (used across the other `/for-*` pages):

| Component | Purpose | Used by |
|---|---|---|
| `ProgramPathway` | 3-track age ladder (4→12+); `highlight` prop | chinese, russian, korean |
| `WhatsIncluded` | 9-item "what's in $40/mo" grid | chinese, russian, korean |
| `LandingFAQ` | Accordion; `faqs` prop | chinese, russian, korean, coding |
| `Guarantees` | 4-card risk-reversal block | chinese, russian, korean |
| `ThreePaths` | Closing decision block (3 paths) | chinese, russian |
| `EnrichmentCalculator` (c) | Revenue calculator | chinese |
| `LossCascade` | "Каскад потери" infographic | russian |
| `PilotForm` (c) | Korean pilot application form (`korean-pilot`) | korean |
| `SpanishDemoForm` (c) | Spanish demo-lesson request form (`spanish-demo`) | spanish |
| `AfterschoolDemoForm` (c) | Afterschool-centers demo-lesson request form (`afterschool-demo`) | afterschool |

> Note: `SolutionSection`, `SocialProof`, `BenefitsSection`, `WhatYouGet`, `CTASection`
> are prop-driven and are also reused by `/for-coding-centers` with inline data.

### `components/home/` — homepage only

| Component | Purpose |
|---|---|
| `ProgramRoadmap` (c) | Homepage 4-track program matrix (incl. Science); mobile tabs |
| `BusinessCalculator` (c) | Interactive profit calculator |

### `components/programs/` — `/programs` only

| Component | Purpose |
|---|---|
| `ProgramsMatrix` (c) | Interactive 3-track × age catalog matrix; mobile track tabs |
| `ProgramCard` | Single program detail card |
| `TrackNav` | Sticky in-page anchor nav |

### `components/contact/`

| Component | Purpose |
|---|---|
| `ContactForm` (c) | Booking form → Netlify form `call-booking` |

---

## 5. Content files (`src/content/`)

| File | Feeds | Notes |
|---|---|---|
| `landing-pages/tutoring-centers.json` | `/for-tutoring-centers` | Full 13-block copy. Loaded via `lib/content.ts` → `landingPages` |
| `programs/catalog.json` | `/programs` | 17-program catalog, 3 tracks. Imported directly by `ProgramsMatrix` |
| `home/program-matrix.json` | homepage `ProgramRoadmap` | 4-track matrix incl. Science |

All other pages keep content **inline** as `const` arrays in the page file. There is no
CMS — copy changes are code changes.

`src/lib/content.ts` only loads `tutoring-centers.json`. `lib/site.ts` exposes `SITE_URL`
(from the `NEXT_PUBLIC_SITE_URL` env var). `lib/utils.ts` exposes `cn()`.

---

## 6. Forms (Netlify Forms)

Two lead forms, both submitted via AJAX, no backend:

| Form name | Component | Page |
|---|---|---|
| `call-booking` | `ContactForm` | `/contact` |
| `korean-pilot` | `PilotForm` | `/for-korean-schools` |
| `spanish-demo` | `SpanishDemoForm` | `/for-spanish-schools` |
| `afterschool-demo` | `AfterschoolDemoForm` | `/for-afterschool-centers` |

**How detection works:** Netlify scans deployed HTML for forms. `public/__forms.html`
holds a hidden static copy of every form so Netlify reliably registers them. **When you
add a new form, add its definition to `public/__forms.html`** with a matching `name`.

**Email delivery is a dashboard step** (not code): Netlify → Site → Forms → Form
notifications → add an email notification per form.

> Do not add a catch-all redirect to `netlify.toml` — a `/*` redirect intercepts form
> POST submissions and breaks the forms.

---

## 7. Conventions & patterns

- **Brand values** — Simple · Accessible · Results-oriented. See `CLAUDE.md`. Every block
  ties to a concrete outcome (money, retention, time). Show the number.
- **Single CTA** — "Get a Free Demo Lesson" → `/contact?demo=true`. "Book a Zoom" is
  secondary. (`/for-tutoring-centers` / `/for-coding-centers` keep a dual CTA per their specs.)
- **Reveal-on-scroll** — add the `.reveal` class to a block; `RevealScript` fades it in.
  It re-runs per route, so client-side navigation works.
- **Section tones** — alternate `Section` `tone` (`default`/`surface`/`muted`) for rhythm.
- **Colors** (Tailwind tokens, defined in `tailwind.config.ts` / `globals.css`):
  `primary` blue, `accent` green, `warning` amber, `danger` red. Track coloring is
  consistent site-wide: Coding = primary, Robotics = warning, Creativity = accent.
- **Fonts** — Plus Jakarta Sans (headings), DM Sans (body), JetBrains Mono (numbers),
  Lora (`font-serif`, the About mission line). Loaded via `next/font` in `layout.tsx`.
- **SEO** — every page exports `metadata` with a unique title, description, and canonical.
  `sitemap.ts` + `robots.ts` are generated.

---

## 8. How to add a new audience landing page

1. Create `src/app/for-<slug>/page.tsx`. Use an existing self-contained page
   (`for-coding-centers` or `for-chinese-schools`) as the template — inline `const`
   content, reuse `shared/` and `landing/` components.
2. Export `metadata` (unique title, description, `canonical`, Open Graph).
3. Add the route to the `paths` array in `src/app/sitemap.ts`.
4. Add a nav link in `src/components/layout/Navigation.tsx` (`NAV_LINKS`) and/or the
   footer columns in `src/components/layout/Footer.tsx` if it should be discoverable.
5. If the page has a lead form, add its definition to `public/__forms.html` and configure
   an email notification in Netlify.
6. Run `npm run build` — confirm the new route appears and the build is green.

---

## 9. Build & deploy

- `npm run build` produces the static site in `out/`. Run it before every commit.
- Netlify builds on push (`netlify.toml`: build `npm run build`, publish `out`).
- Set `NEXT_PUBLIC_SITE_URL` in Netlify env vars to the production domain — it feeds
  canonical URLs, Open Graph, `sitemap.xml`, and `robots.txt`.
- PRs get a Netlify deploy preview; `main` deploys to production.

---

## 10. Known follow-ups

- The two landing-component generations (JSON-driven vs self-contained) could be unified.
- `ContactForm` and `PilotForm` need Netlify email notifications configured (dashboard).
- No analytics layer (GA4) is wired up.
- Replace the placeholder `og-image.svg` with a production `.png` when available.
