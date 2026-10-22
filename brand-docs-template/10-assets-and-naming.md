# 10 · Assets & Naming — {{BRAND_NAME}}

## Folder structure
```
brand-assets/
  logo/
    svg/            {{BRAND_SLUG}}-mark-{{ACCENT_SLUG}}.svg · {{BRAND_SLUG}}-mark-white.svg · {{BRAND_SLUG}}-mark-{{INK_SLUG}}.svg
                    {{BRAND_SLUG}}-wordmark-{{PRIMARY_SLUG}}.svg · {{BRAND_SLUG}}-wordmark-white.svg
                    {{BRAND_SLUG}}-lockup-h-primary.svg · {{BRAND_SLUG}}-lockup-v-reverse.svg …
    png/            same names @1x @2x @3x
    app-icons/      ios-1024.png · android-foreground.png · android-background.png · favicon.ico · apple-touch-icon.png
  fonts/            {{DISPLAY_FONT_FILE}}-*.ttf · {{BODY_FONT_FILE}}-*.ttf · *.woff2 for web
  icons/            svg/ (24-grid, currentColor)
  imagery/          photo/ · illustration/
  templates/        slides/ · docs/ · social/ · email/
  tokens/           tokens.json (source) · generated/ (tailwind.css · Colors.swift · Color.kt)
```

## Naming convention
`{brand}-{element}-{variant}-{colour}[@scale].{ext}` — lowercase, hyphens, no spaces.

| Part | Values |
| --- | --- |
| brand | `{{BRAND_SLUG}}` |
| element | `mark` · `wordmark` · `lockup-h` · `lockup-v` · `icon` · `illus` · `photo` |
| variant | `primary` · `reverse` · `mono` (logos) · descriptive slug (others) |
| colour | `{{ACCENT_SLUG}}` · `{{PRIMARY_SLUG}}` · `{{INK_SLUG}}` · `white` |
| scale | `@2x` · `@3x` (PNG only) |

## Export specs
| Asset | Format | Notes |
| --- | --- | --- |
| Logos | SVG (primary), PNG @1x/2x/3x, PDF/EPS for print | Outlined text, no masks, `fill="currentColor"` for mono variants, viewBox set, IDs stripped |
| Icons | SVG | 24 × 24 viewBox, stroke `currentColor`, optimised with SVGO |
| Photos | JPG (web), HEIC/JPG (mobile) | 2400 px master; web variants 640/1280/1920, quality 80 |
| Illustrations | SVG, PNG @2x fallback | Flatten effects |
| Fonts | WOFF2 (web), TTF/OTF (native) | Subset to Latin unless localised |
| OG / social | PNG 1200 × 630 · 1080 × 1080 · 1080 × 1920 | — |

## Versioning
- `tokens.json` carries `"version"` (semver). **Major** = palette/typeface change · **minor** = new tokens · **patch** = value tweaks.
- Log every change in `CHANGELOG.md`. Tag the asset package `{{BRAND_SLUG}}-brand-assets-vX.Y.Z.zip`.

## Design-to-code handoff
1. {{DESIGN_TOOL}} variables ← imported from `tokens.json`.
2. Components in {{DESIGN_TOOL}} named to match `08-components.md` (`Button/Primary/md`).
3. Code Connect (or equivalent) maps each component to its React / SwiftUI / Compose implementation.
4. Generated token files are the only place raw hex values appear in code.
