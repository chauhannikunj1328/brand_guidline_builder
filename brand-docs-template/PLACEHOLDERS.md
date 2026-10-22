# Placeholder glossary

Every `{{VARIABLE}}` used across the templates, where it comes from in `BRAND-BRIEF.md`, and the default used when the brief says `TBD`.

| Variable | Brief section | Default |
| --- | --- | --- |
| `BRAND_NAME` | 1 | — required |
| `LEGAL_NAME` | 1 | `{{BRAND_NAME}} Inc.` |
| `WORDMARK_TEXT` | 1 | brand name, lowercase |
| `TAGLINE` · `TAGLINE_LINE_1` · `TAGLINE_LINE_2` | 1 | — required |
| `INDUSTRY` · `WEBSITE_URL` · `CONTACT_EMAIL` · `DATE` | 1 | — |
| `PURPOSE` · `POSITIONING` | 2 | — required |
| `AUDIENCE_PRIMARY[_NEEDS]` · `AUDIENCE_SECONDARY[_NEEDS]` | 2 | — |
| `PRINCIPLE_1..3` · `PRINCIPLE_1..3_DESC` | 2 | — required |
| `PERSONALITY` | 2 | — |
| `VOICE_1..4` | 2 | Clear, Warm, Confident, Optimistic |
| `NOT_1..4` | 2 | Corporate, Cold, Clever-for-its-own-sake, Loud |
| `SUB_BRANDS` · `COMPETITORS` | 2 | none |
| `MARK_DESCRIPTION` · `WORDMARK_DESCRIPTION` | 3 | — |
| `MARK_COLOR_NAME` · `WORDMARK_COLOR_NAME` | 3 | accent / primary |
| `LOCKUP_RULE` | 3 | only in supplied lockups |
| `CLEARSPACE_RULE` | 3 | ½ mark height |
| `MIN_SIZE_DIGITAL` · `MIN_SIZE_PRINT` | 3 | 16 px · 6 mm |
| `APP_ICON_RULE` | 3 | mark on primary background |
| `PRIMARY_*` · `ACCENT_*` · `INK_*` · `TINT_*` · `MID_*` (`_NAME`, `_HEX`, `_RGB`, `_CMYK`, `_PMS`) | 4 | HEX required; others derived / `—` |
| `BG_NAME` · `BG_HEX` | 4 | Fog · `#F6F7FB` |
| `MUTED_NAME` · `MUTED_HEX` | 4 | Slate · `#6B7394` |
| `SUCCESS_HEX` · `WARNING_HEX` · `DANGER_HEX` | 4 | `#15803D` · `#B45309` · `#DC2626` |
| `COLOR_RATIO` | 4 | 60 / 30 / 10 |
| `ACCENT_AS_TEXT` | 4 | no |
| `DARK_MODE` | 4 | app + web app |
| `DISPLAY_FONT` · `DISPLAY_WEIGHTS` · `DISPLAY_SOURCE` | 5 | — required |
| `BODY_FONT` · `BODY_WEIGHTS` · `BODY_SOURCE` | 5 | — required |
| `MONO_FONT` | 5 | JetBrains Mono |
| `HEADLINE_STYLE` | 5 | light |
| `CASE_RULE` | 5 | sentence case |
| `BASE_SIZE` | 5 | 16 |
| `RADIUS_FEEL` | 6 | soft (8 / 12 / 24 / 32 / pill) |
| `LAYOUT_DEVICES` | 6 | floating header, tint cards |
| `ICON_STYLE` · `ICON_SET` | 6 | outline · Lucide |
| `PHOTO_DIRECTION` · `ILLUSTRATION_STYLE` | 6 | natural, people-first · none |
| `MOTION_FEEL` | 6 | snappy |
| `AVOID` | 6 | — |
| `PLATFORMS` | 7 | website, web app, iOS, Android |
| `WEB_STACK` · `WEBAPP_STACK` · `MOBILE_STACK` | 7 | Next.js + Tailwind · same · SwiftUI + Compose |
| `DESIGN_TOOL` | 7 | Figma |
| `A11Y_TARGET` | 7 | WCAG 2.2 AA, AAA body text |
| `EXISTING_MATERIAL` | 8 | none |
| `VERSION` | — | 1.0.0 |

Derived values the generator computes (not in the brief): contrast ratios, dark-mode tokens, `*_HOVER_HEX` (primary darkened ~10%), RGB from HEX.

## Derived placeholders (generator fills these — not in the brief)
| Variable | How it's derived |
| --- | --- |
| `BRAND_SLUG` · `PRIMARY_SLUG` · `ACCENT_SLUG` · `INK_SLUG` | kebab-case of the name |
| `PRIMARY_HEX_RAW` | `PRIMARY_HEX` without `#` (Android) |
| `PRIMARY_HOVER_HEX` · `PRIMARY_HOVER_DARK_HEX` | primary darkened ~10% (light) / lightened ~10% (dark) |
| `DARK_SURFACE_HEX` · `DARK_SURFACE_TINT_HEX` · `DARK_BORDER_HEX` · `DARK_TEXT_SECONDARY_HEX` | ink lightened 5% · 12% · 20% · tint at 70% |
| `C_*` (contrast) | WCAG ratio for each pair in `03-color.md` |
| `DISPLAY_WEIGHT` · `HEADING_WEIGHT` | from `HEADLINE_STYLE`: light → 300/500 · bold → 700/600 · mixed → 300/600 |
| `RADIUS_SM/MD/LG/XL` | from `RADIUS_FEEL`: sharp 0/4/8/12 · soft 8/12/24/32 · pill 12/16/32/40 |
| `BUTTON_SHAPE` · `BUTTON_RADIUS` | pill → `radius-pill` · otherwise `radius-md` |
| `DUR_INSTANT/FAST/BASE/SLOW` | from `MOTION_FEEL`: snappy 100/200/300/500 · calm 150/250/400/650 · playful 100/200/350/600 |
| `ICON_STROKE` | from `ICON_STYLE`: outline 1.75 · light 1.5 · bold 2 |
| `WEB_NAV_PATTERN` | from `LAYOUT_DEVICES`, default "floating pill header + overlay menu" |
| `DISPLAY_FONT_FILE` · `BODY_FONT_FILE` · `DISPLAY_FONT_RES` | font file base name (PascalCase) / Android resource (snake_case) |
