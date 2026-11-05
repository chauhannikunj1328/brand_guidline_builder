# 03 · Color

> Two layers: **raw palette** (named colours) → **semantic tokens** (what they're for).
> Code and Figma only reference semantic tokens. Raw values live in `tokens.json`.

## Raw palette
Values come from the Figma variables in "Rectio | Full Project Design".

### Pampas (brand)
| Token | HEX | RGB | Role |
| --- | --- | --- | --- |
| `pampas-50` | `#F8F6F4` | 248 246 244 | Lightest tint |
| `pampas-100` | `#F1EDE7` | 241 237 231 | Light bands and tint surfaces |
| `pampas-200` | `#DFD5C9` | 223 213 201 | Cards, dark-theme secondary text |
| `pampas-300` | `#CBBAA6` | 203 186 166 | Mid-tone cards, dark-theme links |
| `pampas-400` | `#B59A82` | 181 154 130 | Decorative |
| `pampas-500` | `#A5846A` | 165 132 106 | **Primary brand colour** |
| `pampas-600` | `#98745E` | 152 116 94 | Bands, large text backgrounds |
| `pampas-700` | `#7F5E4F` | 127 94 79 | Buttons, links, focus ring |
| `pampas-800` | `#684E44` | 104 78 68 | Accent, button hover |
| `pampas-900` | `#554139` | 85 65 57 | Dark surfaces |
| `pampas-950` | `#2D211D` | 45 33 29 | Dark Pampas: small-scale logo, darkest surface |

### Grey and base
| Token | HEX | Role |
| --- | --- | --- |
| `white` | `#FFFFFF` | Base surface |
| `grey-50` | `#FAFAFA` | Page background |
| `grey-100` | `#F4F4F5` | Quiet fills |
| `grey-200` | `#E5E5E5` | Borders |
| `grey-300` | `#D4D4D8` | Strong borders |
| `grey-400` | `#A1A1AA` | Disabled, decorative |
| `grey-500` | `#71717A` | Muted labels |
| `grey-600` | `#52525B` | Secondary text |
| `grey-700` | `#3F3F46` | Body text on tints |
| `grey-800` | `#27272A` | Dark UI |
| `grey-950` | `#09090B` | Primary text |
| `black` | `#000000` | Mono logo |

### Functional colours (UI only, never in marketing)
| Token | Figma name | HEX | With text |
| --- | --- | --- | --- |
| `success` | Green 500 | `#619250` | Grey 950 (5.4 : 1). White is only 3.7 : 1 |
| `warning` | Yellow 500 | `#EF8020` | Grey 950 (7.4 : 1). White is only 2.7 : 1 |
| `danger` | Red 500 | `#EC4747` | Grey 950 (5.3 : 1). White is only 3.8 : 1 |

## Semantic tokens
The Figma defines a light look only. The dark column is derived from the Pampas scale and has not been designed or reviewed in Figma.

| Semantic token | Light | Dark |
| --- | --- | --- |
| `bg/page` | grey-50 | pampas-950 |
| `bg/surface` | white | pampas-900 |
| `bg/surface-tint` | pampas-100 | pampas-800 |
| `bg/brand` | pampas-500 | pampas-700 |
| `bg/inverse` | grey-950 | white |
| `text/primary` | grey-950 | white |
| `text/secondary` | grey-600 | pampas-200 |
| `text/on-brand` | white | white |
| `text/link` | pampas-700 | pampas-300 |
| `border/default` | grey-200 | pampas-800 |
| `action/primary` | pampas-700 | pampas-700 |
| `action/primary-hover` | pampas-800 | pampas-800 |
| `action/accent` | pampas-800 | pampas-300 |
| `focus/ring` | pampas-700 | pampas-300 |

## Approved pairings
| Background | Text | Logo |
| --- | --- | --- |
| White / Grey 50 / Pampas 100 | Grey 950 | Pampas 500 |
| Pampas 200 / Pampas 300 | Grey 950 | Pampas 950 |
| Pampas 500 | White at large sizes only, Grey 950 for body text | White |
| Pampas 800 / 900 / 950 | White | White |

## Contrast (WCAG 2.2)
Ratios are measured by `npm run contrast` and this table.

| Pair | Ratio | Normal text | Large text |
| --- | --- | --- | --- |
| Grey 950 on White | 19.9 : 1 | AAA | AAA |
| Grey 950 on Pampas 100 | 17.1 : 1 | AAA | AAA |
| Grey 950 on Pampas 300 | 10.5 : 1 | AAA | AAA |
| Grey 950 on Pampas 500 | 5.8 : 1 | AA | AAA |
| Grey 600 on White | 7.7 : 1 | AAA | AAA |
| Grey 600 on Grey 50 | 7.4 : 1 | AAA | AAA |
| Pampas 700 on White | 5.8 : 1 | AA | AAA |
| White on Pampas 800 | 7.6 : 1 | AAA | AAA |
| White on Pampas 700 | 5.8 : 1 | AA | AAA |
| White on Pampas 600 | 4.2 : 1 | ✗ | AA |
| White on Pampas 500 | 3.4 : 1 | ✗ | AA |
| Pampas 500 on White | 3.4 : 1 | ✗ | AA, logo and large text only |

**Rule:** body text must be AAA (7 : 1). UI labels and large text may be AA (4.5 : 1, or 3 : 1 at 24 px and up, or 18.66 px bold).

**Waiver:** white on Pampas 500 is the core colourway in the Figma. At 3.4 : 1 it does not meet 4.5 : 1 for normal text, so it is recorded in `contrastWaivers` in `rectio.config.json` and limited to logos and large text. Buttons use Pampas 700 (5.8 : 1), which differs from the Figma.

## Usage ratios
Roughly **60% white and light neutrals, 30% Pampas, 10% Grey 950 and Dark Pampas**.

## Data visualisation ("waterfall")
Ordered sequence for charts: Pampas 950 → Pampas 700 → Pampas 500 → Pampas 300 → Pampas 100.
