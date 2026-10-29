# Proposal Foundry website

Next.js 15 (App Router, TypeScript), statically generated, ready for Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy to Vercel

Push this folder to a Git repository and import it in Vercel (framework preset: Next.js, no environment variables needed), or run `npx vercel` from this folder. Then add proposal-foundry.com under Project Settings > Domains.

## Where to edit

| What | File |
| --- | --- |
| All copy, offers, markets, stats, past performance | `lib/content.ts` |
| Prices (null shows "Pricing at launch") | `pricing` in `lib/content.ts` |
| Scheduler link for consultation buttons | `site.schedulerUrl` in `lib/content.ts` |
| Purchase button destination (email until checkout exists) | `lib/links.ts` |
| Colors, spacing, radius (from the Proposal Foundry design system) | `app/tokens.css` |
| Component styles | `app/globals.css` |
| Logo and favicon | `public/proposal-foundry-mark.png`, `app/icon.png` |

## Before launch

- Set prices in `lib/content.ts`.
- Add a scheduler URL, or keep consultations routed to the Contact page.
- Connect checkout (Stripe Payment Links work with no code: paste each link into `buyHref`).
- Confirm the past performance entries and their labels.
- Replace the hotlinked Unsplash hero photo with a file in `public/` if preferred.
