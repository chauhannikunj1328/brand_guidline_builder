# 03 · Color

> Two layers: **raw palette** (named colours) → **semantic tokens** (what they're for).
> Code and Figma only reference semantic tokens. Raw values live in `tokens.json`.

## Raw palette
| Token | Name | HEX | RGB | Pantone | Role |
| --- | --- | --- | --- | --- | --- |
| `indigo` | Rectio Indigo | `#4338CA` | 67 56 202 | 2726 C | Primary brand colour |
| `coral` | Signal Coral | `#FF6B4A` | 255 107 74 | 171 C | Accent, logo mark |
| `midnight` | Midnight | `#111C44` | 17 28 68 | 2766 C | Text, dark surfaces |
| `cloud` | Cloud | `#DFE4FF` | 223 228 255 | 2707 C | Light tint surfaces |
| `sky` | Sky | `#8FA3FF` | 143 163 255 | 2716 C | Secondary tint, charts |
| `white` | White | `#FFFFFF` | 255 255 255 | — | Base surface |
| `fog` | Fog | `#F6F7FB` | 246 247 251 | — | Page background |
| `slate` | Slate | `#6B7394` | 107 115 148 | — | Muted text |

### Functional colours (UI only — never in marketing)
| Token | HEX | Use |
| --- | --- | --- |
| `success` | `#15803D` | Confirmations |
| `warning` | `#B45309` | Caution |
| `danger` | `#DC2626` | Errors, destructive actions |
| `info` | `#4338CA` | Same as indigo |

## Semantic tokens
| Semantic token | Light | Dark |
| --- | --- | --- |
| `bg/page` | fog | midnight |
| `bg/surface` | white | `#1A2657` |
| `bg/surface-tint` | cloud | `#26346B` |
| `bg/brand` | indigo | indigo |
| `bg/inverse` | midnight | white |
| `text/primary` | midnight | white |
| `text/secondary` | slate | `#A9B3D6` |
| `text/on-brand` | white | white |
| `text/link` | indigo | sky |
| `border/default` | cloud | `#33417A` |
| `action/primary` | indigo | indigo |
| `action/primary-hover` | `#3730A3` | `#4F46E5` |
| `action/accent` | coral | coral |
| `focus/ring` | coral | coral |

## Approved pairings
| Background | Text | Logo |
| --- | --- | --- |
| White / Fog / Cloud | Midnight | Coral mark + Indigo wordmark |
| Indigo | White | Coral mark + White wordmark |
| Midnight | White | Coral mark + White wordmark |
| Sky | Midnight | Midnight mono |
| Coral | Midnight | Midnight mono (rare) |

## Contrast (WCAG 2.2)
| Pair | Ratio | Normal text | Large text |
| --- | --- | --- | --- |
| Midnight on White | 16.1 : 1 | AAA | AAA |
| White on Indigo | 8.6 : 1 | AAA | AAA |
| White on Midnight | 16.1 : 1 | AAA | AAA |
| Midnight on Cloud | 13.2 : 1 | AAA | AAA |
| Indigo on White | 7.9 : 1 | AAA | AAA |
| Midnight on Coral | 6.6 : 1 | AA | AAA |
| White on Coral | 2.4 : 1 | ✗ | ✗ — never use for text |
| Slate on White | 4.9 : 1 | AA | AAA |

**Rule:** body text must be AAA (7 : 1). UI labels and large text may be AA (4.5 : 1). Coral is for the mark, accents and focus rings — **not** text on white.

## Usage ratios
Roughly **60% neutral (white/fog/cloud), 30% indigo/midnight, 10% coral**. Coral is the exclamation mark, not the sentence.

## Data visualisation ("waterfall")
Ordered sequence for charts: midnight → indigo → sky → cloud → white. Never use coral in charts unless highlighting one value.
