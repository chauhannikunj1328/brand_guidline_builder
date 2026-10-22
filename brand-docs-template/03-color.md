# 03 · Color — {{BRAND_NAME}}

> Two layers: **raw palette** (named colours) → **semantic tokens** (what they're for).
> Code and Figma only reference semantic tokens. Raw values live in `tokens.json`.

## Raw palette
| Token | Name | HEX | RGB | CMYK | Pantone | Role |
| --- | --- | --- | --- | --- | --- | --- |
| `primary` | {{PRIMARY_NAME}} | `{{PRIMARY_HEX}}` | {{PRIMARY_RGB}} | {{PRIMARY_CMYK}} | {{PRIMARY_PMS}} | Primary brand colour |
| `accent` | {{ACCENT_NAME}} | `{{ACCENT_HEX}}` | {{ACCENT_RGB}} | {{ACCENT_CMYK}} | {{ACCENT_PMS}} | Accent, logo mark |
| `ink` | {{INK_NAME}} | `{{INK_HEX}}` | {{INK_RGB}} | {{INK_CMYK}} | {{INK_PMS}} | Text, dark surfaces |
| `tint` | {{TINT_NAME}} | `{{TINT_HEX}}` | {{TINT_RGB}} | {{TINT_CMYK}} | {{TINT_PMS}} | Light tint surfaces |
| `mid` | {{MID_NAME}} | `{{MID_HEX}}` | {{MID_RGB}} | {{MID_CMYK}} | {{MID_PMS}} | Secondary tint, charts |
| `white` | White | `#FFFFFF` | 255 255 255 | 0 0 0 0 | — | Base surface |
| `bg` | {{BG_NAME}} | `{{BG_HEX}}` | | | | Page background |
| `muted` | {{MUTED_NAME}} | `{{MUTED_HEX}}` | | | | Muted text |

### Functional colours (UI only — never in marketing)
| Token | HEX | Use |
| --- | --- | --- |
| `success` | `{{SUCCESS_HEX}}` | Confirmations |
| `warning` | `{{WARNING_HEX}}` | Caution |
| `danger` | `{{DANGER_HEX}}` | Errors, destructive actions |
| `info` | `{{PRIMARY_HEX}}` | Same as primary |

## Semantic tokens
<!-- guidance: dark column — derive if DARK_MODE ≠ none; keep accent unchanged; surfaces are ink lightened 5–15% -->
| Semantic token | Light | Dark |
| --- | --- | --- |
| `bg/page` | bg | ink |
| `bg/surface` | white | {{DARK_SURFACE_HEX}} |
| `bg/surface-tint` | tint | {{DARK_SURFACE_TINT_HEX}} |
| `bg/brand` | primary | primary |
| `bg/inverse` | ink | white |
| `text/primary` | ink | white |
| `text/secondary` | muted | {{DARK_TEXT_SECONDARY_HEX}} |
| `text/on-brand` | white | white |
| `text/link` | primary | mid |
| `border/default` | tint | {{DARK_BORDER_HEX}} |
| `action/primary` | primary | primary |
| `action/primary-hover` | {{PRIMARY_HOVER_HEX}} | {{PRIMARY_HOVER_DARK_HEX}} |
| `action/accent` | accent | accent |
| `focus/ring` | accent | accent |

## Approved pairings
| Background | Text | Logo |
| --- | --- | --- |
| White / {{BG_NAME}} / {{TINT_NAME}} | {{INK_NAME}} | {{MARK_COLOR_NAME}} mark + {{WORDMARK_COLOR_NAME}} wordmark |
| {{PRIMARY_NAME}} | White | {{MARK_COLOR_NAME}} mark + White wordmark |
| {{INK_NAME}} | White | {{MARK_COLOR_NAME}} mark + White wordmark |
| {{MID_NAME}} | {{INK_NAME}} | {{INK_NAME}} mono |
| {{ACCENT_NAME}} | {{INK_NAME}} | {{INK_NAME}} mono (rare) |

## Contrast (WCAG 2.2)
<!-- guidance: compute every ratio (https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio). AAA ≥ 7:1, AA ≥ 4.5:1, large text AA ≥ 3:1 -->
| Pair | Ratio | Normal text | Large text |
| --- | --- | --- | --- |
| {{INK_NAME}} on White | {{C_INK_WHITE}} | | |
| White on {{PRIMARY_NAME}} | {{C_WHITE_PRIMARY}} | | |
| White on {{INK_NAME}} | {{C_WHITE_INK}} | | |
| {{INK_NAME}} on {{TINT_NAME}} | {{C_INK_TINT}} | | |
| {{PRIMARY_NAME}} on White | {{C_PRIMARY_WHITE}} | | |
| {{INK_NAME}} on {{ACCENT_NAME}} | {{C_INK_ACCENT}} | | |
| White on {{ACCENT_NAME}} | {{C_WHITE_ACCENT}} | | |
| {{MUTED_NAME}} on White | {{C_MUTED_WHITE}} | | |

**Rule:** body text must be AAA (7 : 1). UI labels and large text may be AA (4.5 : 1). Accent as text: **{{ACCENT_AS_TEXT}}**.

## Usage ratios
Roughly **{{COLOR_RATIO}}** (neutral / primary+ink / accent). The accent is the exclamation mark, not the sentence.

## Data visualisation
Ordered sequence for charts: ink → primary → mid → tint → white. Use the accent only to highlight a single value.
