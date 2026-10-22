# Brand Docs — Rectio

Single source of truth for the Rectio brand, written to be reused across **website, mobile app and web app**.
Every project (Figma, Next.js, iOS, Android) reads from these files — nothing brand-related is defined anywhere else.

## How to use

1. **Designers** — read `00` → `09` before opening Figma. Import `tokens.json` as Figma variables.
2. **Developers** — generate platform tokens from `tokens.json` (Tailwind, SwiftUI, Compose). Read `platforms/*.md` for your target.
3. **AI tools** — `CLAUDE.md` briefs Claude Code / Cursor so generated UI is on-brand.
4. **Everyone** — log changes in `CHANGELOG.md`; bump the version in `tokens.json`.

## Files

| File | Contents |
| --- | --- |
| `00-brand-overview.md` | Purpose, positioning, principles, audience, personality |
| `01-voice-and-tone.md` | Voice, tone by context, writing rules, UX microcopy |
| `02-logo.md` | Mark, wordmark, lockups, clearspace, sizes, don'ts |
| `03-color.md` | Palette, semantic tokens, light/dark, contrast |
| `04-typography.md` | Families, weights, cross-platform type scale |
| `05-spacing-and-layout.md` | Spacing scale, grids, breakpoints, radius |
| `06-iconography-and-imagery.md` | Icons, photography, illustration |
| `07-motion.md` | Durations, easing, principles |
| `08-components.md` | Platform-agnostic component specs |
| `09-accessibility.md` | WCAG baseline for every platform |
| `10-assets-and-naming.md` | File naming, exports, folder structure |
| `platforms/web.md` · `mobile.md` · `webapp.md` | Where each platform diverges |
| `tokens.json` | Design tokens (W3C DTCG) — the design ↔ code bridge |
| `CHANGELOG.md` | Versioned brand history |
| `CLAUDE.md` | Brief for AI coding tools |

## Related

- Brand Center website template: `../brand-center-template/` (reads the same values via `content/brand.config.ts` + `app/globals.css`)
