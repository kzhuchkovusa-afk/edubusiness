# GoCoding — profitforafterschool.com

Marketing site for GoCoding: licensed STEM curriculum (Coding, Robotics,
Creativity, Science) for afterschool and tutoring centers.

## Brand values — apply to ALL copy, design, and new features

**Simple. Accessible. Results-oriented.**
(Просто. Доступно. Результативно.)

Every block, sentence, and number on the site must be:

- **Simple** — no jargon, short sentences, one obvious next step.
- **Accessible** — a non-technical center owner gets it instantly.
- **Results-oriented** — always tie back to a concrete outcome: money earned,
  students kept, time saved. Show the number.

When in doubt: cut words, show the math, make the next action obvious.

## Stack

- Next.js 14 (App Router), static export (`output: 'export'`)
- Tailwind CSS, TypeScript
- Content lives in JSON under `src/content/`
- Deployed on Netlify; production domain `profitforafterschool.com`
- Site URL comes from the `NEXT_PUBLIC_SITE_URL` env var
- Lead form: Netlify Forms (`call-booking`)

## Conventions

- Single primary CTA across the site: "Get a Free Demo Lesson" → `/contact?demo=true`
- Reveal-on-scroll uses the `.reveal` class + `RevealScript` (re-runs per route)
- Run `npm run build` before committing; keep the build green
