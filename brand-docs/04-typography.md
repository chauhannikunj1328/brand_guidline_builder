# 04 · Typography

## Families
| Role | Family | Weights | Fallback |
| --- | --- | --- | --- |
| Display (headlines) | **Plus Jakarta Sans** | 300 · 400 · 500 · 600 · 700 · 800 | system-ui, sans-serif |
| Body (paragraphs, UI) | **Inter** | 400 · 500 · 600 | system-ui, sans-serif |
| Mono (code, data) | JetBrains Mono | 400 · 500 | ui-monospace |

Platform loading: web → `next/font` (self-hosted); iOS → bundle `.ttf`, register in `Info.plist`; Android → `res/font/`. Never load from a third-party CDN in production apps.

## Cross-platform type scale
One scale, expressed in each platform's unit. Base = 16.

| Token | Role | Web (rem / px) | iOS (pt) | Android (sp) | Weight | Line-height | Tracking |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `display-xl` | Hero / covers | 6rem / 96 | 80 | 80 | 300 | 1.0 | −0.03em |
| `display-lg` | Section hero | 4rem / 64 | 56 | 56 | 300 | 1.02 | −0.03em |
| `heading-1` | Page title | 2.5rem / 40 | 34 | 34 | 500 | 1.1 | −0.02em |
| `heading-2` | Section | 2rem / 32 | 28 | 28 | 600 | 1.15 | −0.02em |
| `heading-3` | Sub-section / card | 1.5rem / 24 | 22 | 22 | 600 | 1.25 | −0.01em |
| `heading-4` | Small heading | 1.25rem / 20 | 20 | 20 | 600 | 1.3 | 0 |
| `body-lg` | Lead paragraph | 1.125rem / 18 | 17 | 18 | 400 | 1.6 | 0 |
| `body` | Default | 1rem / 16 | 17 | 16 | 400 | 1.5 | 0 |
| `body-sm` | Secondary text | 0.875rem / 14 | 15 | 14 | 400 | 1.45 | 0 |
| `label` | Buttons, tabs, inputs | 0.875rem / 14 | 15 | 14 | 500 | 1.2 | 0 |
| `caption` | Meta, timestamps | 0.75rem / 12 | 13 | 12 | 400 | 1.35 | +0.01em |
| `overline` | Eyebrows | 0.75rem / 12 | 12 | 12 | 600 | 1.2 | +0.08em, uppercase |

Mobile note: iOS/Android body is slightly larger for touch-distance reading; scale headings down one step on screens < 375 pt.

## Rules
- Display sizes use **Light (300)** — the brand's signature look. Headings 1–4 use Medium/SemiBold.
- Body copy is always Inter, never the display face.
- Max **two weights** per layout; max **one type colour** per layout (Midnight or White).
- Sentence case everywhere. Overline is the only uppercase style.
- Measure: 45–75 characters per line for body; `max-width: 65ch`.
- Support Dynamic Type (iOS) and font scaling (Android) — never lock text size.

## Fluid web headings
```css
--display-xl: clamp(3rem, 8vw, 6rem);
--display-lg: clamp(2.5rem, 6vw, 4rem);
--heading-1: clamp(2rem, 4vw, 2.5rem);
```
