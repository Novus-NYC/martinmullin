# Martin Mullin

Portfolio website for Martin Mullin, an Irish-born painter living and working in New York City. Built by Novus (Volta NYC) as a replacement for the previous Weebly site at www.martinmullin.com.

## Overview

- Every artwork from the previous site, 124 works in 11 series, at the largest size the old host served, shown at true proportions with a label (title, year, medium, dimensions).
- A keyboard-accessible lightbox on every series page (Enter opens, arrow keys move, Escape closes and returns focus).
- Biography (exhibitions, collections, activities, bibliography) and CV (résumé, letters of reference, catalogs, press) carried over word for word, with the original PDFs downloadable.
- Permanent redirects from every old `.html` URL to the new routes.

## Tech stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS 3, `next/image`
- Fonts: Instrument Serif and Instrument Sans, self-hosted from npm (Fontsource), so builds never need to reach Google Fonts
- Hosted on Vercel

## Project structure

- `src/app` routes: `/`, `/work`, `/work/[series]`, `/biography`, `/cv`, `/contact`, plus icons, sitemap and robots
- `src/components` Navbar, Footer, Wall (justified rows + viewer with inquiry link), SeriesWall (series covers on one line), YearList, PageHeader, RevealManager
- `src/lib/site.ts` central site config (name, email, nulls for unknown details)
- `src/lib/works.ts` every series and work, with the verbatim caption from the old site
- `src/lib/biography.ts`, `src/lib/cv.ts` transcribed text
- `src/lib/metadata.ts` per-route metadata helper
- `public/art/<series>` original image files, untouched
- `public/cv`, `public/documents` scans and PDFs

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Design notes

Art direction is "the wall and the label": a neutral ground, work at true proportions, a small label beneath. Two documented exceptions to the Volta build standard are recorded in `src/app/globals.css` and `tailwind.config.ts`: a near-neutral palette with one gold accent (the paintings carry the color) and quiet opacity fades only (nothing moves near the artwork).

## Open items for the client

- The old site had a password-protected "Current Work" page that could not be read. Send its content if it should be public.
- Higher-resolution files are wanted for Works on Paper (about 430 by 576 px), The Stuyvesant-Fish House Paintings (about 430 by 510 px), the Kiefer monotypes (600 px wide) and the portrait (350 px wide).
- Captions are missing on the old site for two LSABS works (details taken from the image filenames), all six City Works, all twenty Works on Paper and the seven Kiefer prints. Titles and years would complete their labels.
- Please confirm spellings carried over as written: "Citly Crakle", "Varient", "Deriere L'Etoile", "Bl:Wh'15 36'x30"", "Acqua".
- Three works are marked "not available" on the old site. Confirm they should stay on view.
- No phone, studio address, Instagram or other social links were found. They are hidden until supplied (`src/lib/site.ts`).
- The four Autumn works came with staged room renders. They are shown only as a secondary "Shown in a room" view in the lightbox. Say if they should be removed.
