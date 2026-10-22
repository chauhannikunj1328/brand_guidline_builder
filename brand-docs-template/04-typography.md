# 04 · Typography — {{BRAND_NAME}}

## Families
| Role | Family | Weights | Source / licence | Fallback |
| --- | --- | --- | --- | --- |
| Display (headlines) | **{{DISPLAY_FONT}}** | {{DISPLAY_WEIGHTS}} | {{DISPLAY_SOURCE}} | system-ui, sans-serif |
| Body (paragraphs, UI) | **{{BODY_FONT}}** | {{BODY_WEIGHTS}} | {{BODY_SOURCE}} | system-ui, sans-serif |
| Mono (code, data) | {{MONO_FONT}} | 400 · 500 | | ui-monospace |

Platform loading: web → `next/font` or self-hosted `@font-face` (WOFF2); iOS → bundle `.ttf`, register in `Info.plist`; Android → `res/font/`. Never load from a third-party CDN in production apps.

## Cross-platform type scale
One scale, expressed in each platform's unit. Base = {{BASE_SIZE}}.
<!-- guidance: keep the ratios; only change if the brand needs a different scale. Headline weight per HEADLINE_STYLE (light = 300, bold = 700, mixed = 300 display / 600 headings) -->

| Token | Role | Web (rem / px) | iOS (pt) | Android (sp) | Weight | Line-height | Tracking |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `display-xl` | Hero / covers | 6rem / 96 | 80 | 80 | {{DISPLAY_WEIGHT}} | 1.0 | −0.03em |
| `display-lg` | Section hero | 4rem / 64 | 56 | 56 | {{DISPLAY_WEIGHT}} | 1.02 | −0.03em |
| `heading-1` | Page title | 2.5rem / 40 | 34 | 34 | {{HEADING_WEIGHT}} | 1.1 | −0.02em |
| `heading-2` | Section | 2rem / 32 | 28 | 28 | {{HEADING_WEIGHT}} | 1.15 | −0.02em |
| `heading-3` | Sub-section / card | 1.5rem / 24 | 22 | 22 | {{HEADING_WEIGHT}} | 1.25 | −0.01em |
| `heading-4` | Small heading | 1.25rem / 20 | 20 | 20 | {{HEADING_WEIGHT}} | 1.3 | 0 |
| `body-lg` | Lead paragraph | 1.125rem / 18 | 17 | 18 | 400 | 1.6 | 0 |
| `body` | Default | 1rem / 16 | 17 | 16 | 400 | 1.5 | 0 |
| `body-sm` | Secondary text | 0.875rem / 14 | 15 | 14 | 400 | 1.45 | 0 |
| `label` | Buttons, tabs, inputs | 0.875rem / 14 | 15 | 14 | 500 | 1.2 | 0 |
| `caption` | Meta, timestamps | 0.75rem / 12 | 13 | 12 | 400 | 1.35 | +0.01em |
| `overline` | Eyebrows | 0.75rem / 12 | 12 | 12 | 600 | 1.2 | +0.08em, uppercase |

## Rules
- Display sizes use **{{DISPLAY_WEIGHT}}** — the brand's signature look. Headings use {{HEADING_WEIGHT}}.
- Body copy is always {{BODY_FONT}}, never the display face.
- Max **two weights** per layout; max **one type colour** per layout ({{INK_NAME}} or White).
- {{CASE_RULE}} everywhere. Overline is the only uppercase style.
- Measure: 45–75 characters per line; `max-width: 65ch`.
- Support Dynamic Type (iOS) and font scaling (Android) — never lock text size.

## Fluid web headings
```css
--display-xl: clamp(3rem, 8vw, 6rem);
--display-lg: clamp(2.5rem, 6vw, 4rem);
--heading-1: clamp(2rem, 4vw, 2.5rem);
```

## Specimen
<!-- guidance: paste the tagline set in display-xl and a paragraph in body so people see the pairing -->
