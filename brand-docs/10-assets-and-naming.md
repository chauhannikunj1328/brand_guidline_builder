# 10 · Assets & Naming

## Folder structure
```
brand-assets/rectio/
  logo/
    svg/            rectio-mark-primary-pampas.svg · rectio-mark-reverse-white.svg · rectio-mark-mono-black.svg
                    rectio-mark-mono-currentcolor.svg · rectio-mark-mono-small.svg (small-use Spark)
                    rectio-wordmark-*.svg · rectio-lockup-h-*.svg (same colourways)
    png/            same names, @1x @2x @3x (e.g. rectio-mark-primary-pampas@2x.png)
    app-icons/      ios-1024.png · android-foreground.png · android-background.png · favicon.ico · apple-touch-icon.png
  fonts/            Geist-Variable · GeistMono-Variable (.woff2, .ttf) · SpaceGrotesk-Latin · SpaceGrotesk-LatinExt (.woff2)
  licenses/         ofl-geist.txt · ofl-space-grotesk.txt (SIL Open Font License, keep with the fonts)
  icons/            svg/ (24-grid, currentColor)
  imagery/          photo/ · illustration/  (see 06)
  templates/        slides/ · docs/ · social/ · email/
```
`npm run assets` adds `tokens/` (tokens.json and generated files) to the download zip.

## Naming convention
`{brand}-{element}-{variant}-{colour}[@scale].{ext}` — lowercase, hyphens, no spaces.

| Part | Values |
| --- | --- |
| element | `mark` · `wordmark` · `lockup-h` · `lockup-v` · `icon` · `illus` · `photo` |
| variant | `primary` · `reverse` · `mono` (logos) · descriptive slug (others) |
| colour | `pampas` · `black` · `white` · `currentcolor` (`small` marks the small-use Spark) |
| scale | `@2x` · `@3x` (PNG only) |

Examples: `rectio-mark-primary-pampas.svg`, `rectio-lockup-h-reverse-white@2x.png`, `icon-arrow-right.svg`, `photo-team-workshop-01.jpg`.

## Export specs
| Asset | Format | Notes |
| --- | --- | --- |
| Logos | SVG (primary), PNG @1x/2x/3x, PDF/EPS for print | SVG: outlined text, no masks, `fill="currentColor"` for mono variants, viewBox set, IDs stripped |
| Icons | SVG | 24 × 24 viewBox, stroke `currentColor`, optimised with SVGO |
| Photos | JPG (web), HEIC/JPG (mobile) | 2400 px longest edge master; web variants 640/1280/1920, quality 80 |
| Illustrations | SVG, PNG @2x fallback | Flatten effects |
| Fonts | WOFF2 (web), TTF/OTF (native) | Subset to Latin unless localised |
| OG / social | PNG 1200 × 630 · 1080 × 1080 · 1080 × 1920 | — |

## Versioning
- `tokens.json` carries `"version"` (semver). Bump **major** for palette/typeface changes, **minor** for new tokens, **patch** for value tweaks.
- Log every change in `CHANGELOG.md`. Tag the asset package `brand-assets-vX.Y.Z.zip`.

## Design-to-code handoff
1. Figma variables ← imported from `tokens.json` (Tokens Studio or native import).
2. Components in Figma named to match `08-components.md` (`Button/Primary/md`).
3. Code Connect (Figma) maps each component to its React / SwiftUI / Compose implementation.
4. Generated token files (`tokens/generated/`) are the only place raw hex values appear in code.
