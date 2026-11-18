# Brand Center — Rectio edition

A reusable, rebrandable brand-guidelines site built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.
Structure inspired by enterprise brand portals: a hero home page, an "Explore our Assets" carousel,
and guideline pages (Foundation, Voice, Logo, Wordmark, Color, Typography, Layout, System, Lockups, Resources).

Fully styled example with the placeholder "Rectio" brand (Indigo / Coral, Plus Jakarta Sans + Inter). Use it to see the template at full fidelity.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. (Port is fixed in `package.json` so both editions can run side by side.)

## Rebrand in three files

| What | Where |
| --- | --- |
| Colours, radii, container width | `app/globals.css` → `:root` tokens |
| Fonts | `app/[lang]/layout.tsx` (`next/font/google` or `next/font/local`) |
| Name, mark name, palette metadata, download links | `content/brand.config.ts` |
| Menu and footer links (addresses) | `lib/i18n/nav.ts` |
| Page text, menu and footer labels, in each language | `content/i18n/<lang>/*.json` |
| Logo mark / wordmark | `components/Logo.tsx` (replace the SVG paths) |

## Pages (1:1 with the reference brand center)

| Route | Page | Pagination |
| --- | --- | --- |
| `/` | Home — hero, intro split, tagline card, Explore our Assets | — |
| `/brand-foundation` | Purpose · Positioning · Principles · Cheat Sheet | Explore our Assets |
| `/brand-voice` | Voice Principles · Overview · 3 principles with Do/Don't + examples · Cheat Sheet · Best Practices | Explore our Assets |
| `/logo` | Introduction · Notes (tabs) · Primary/Secondary color · Sizing · App Icon · Holding Shapes · Don'ts | Prev/Next |
| `/wordmark` | Introduction · Clearspace · Color usage · Sizing · Holding shapes · Don'ts | Prev/Next |
| `/color` | Primary Palette · Pairings · Waterfall · Web Accessibility · Don'ts | Prev/Next |
| `/typography` | 23 sections from Weights to Label Design | Prev/Next |
| `/layout` | Grids · Applying Logos · Applying Type · Quick Guide | Prev/Next |
| `/brand-os` | Frames · Window/Tiles/Outlines + tips · Frame Don'ts · Buttons | Prev/Next |
| `/lockups`, `/internal-resources` | Download cards | Explore our Assets |
| `/trademarks`, `/contact` | Text pages | — |

Each page is a plain `.tsx` file in `app/<route>/page.tsx` built from the primitives in `components/ui/`
(`Band`, `Card`, `Col`, `Split`, `SectionHead`, `Tile`, `DontCard`, `Tabs`, `Table`, `Ph`…). Section anchors
listed in each page's `rail` array drive the sticky side rail.

## Site chrome

- `components/site/Header.tsx` — floating pill header (hides when the rail is visible)
- `components/site/SideRail.tsx` — fixed 248px rail that appears after the hero on desktop (logo, menu, page title, section anchors)
- `components/site/MenuOverlay.tsx` — full-screen menu: 4 primary items, sub-pages column, Trademarks
- `components/site/ExploreAssets.tsx`, `PrevNext.tsx`, `Footer.tsx`

## Replace placeholder visuals

`components/Figure.tsx` draws every illustration from the brand mark and palette so the
template works with zero image files. Swap any `case` for a `next/image` when you have real artwork.

## Assets download

`public/downloads/brand-assets.zip` is a placeholder — replace it with your real asset package,
or point `brand.downloads.all` to a hosted URL.

## Project layout

```
app/                 one folder per route (home, brand-foundation, …, contact)
components/site/     Header, SideRail, MenuOverlay, Footer, ExploreAssets, PrevNext, PageHero, PageShell
components/ui/       layout primitives, Tabs, SwatchCard, Dots
components/Logo.tsx  Mark + Wordmark
content/             brand.config.ts   ← edit this
lib/pageLinks.tsx    prev/next visual cards
public/downloads/    asset package
```

## Languages

English is the main language. Spanish and Arabic are being added page by page.

| Language | Address | Direction |
| --- | --- | --- |
| English | `/color` | left to right |
| Español | `/es/color` | left to right |
| العربية | `/ar/color` | right to left |

- Pages live in `app/[lang]`. `proxy.ts` serves English at the plain address and redirects `/en/...` to it.
- Text is in `content/i18n/<lang>/*.json`. English is the source: Spanish and Arabic must have the same keys (the type check enforces it).
- A page only gets a Spanish or Arabic address once it is listed in `TRANSLATED` in `lib/i18n/config.ts`. Until then every link and the language menu keep visitors on the English page.
- Use `LocalizedLink` (not `next/link`) for internal links, and logical CSS (`ps-`, `pe-`, `start-`, `end-`, `border-s`) instead of `pl-`, `pr-`, `left-`, `right-` so layouts flip for Arabic.
- Spanish and Arabic text is written by Claude and needs review by a native speaker. Terms to keep consistent: `content/i18n/GLOSSARY.md`.
