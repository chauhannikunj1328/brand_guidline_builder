# 05 · Spacing & Layout — {{BRAND_NAME}}

<!-- guidance: these are recommended defaults. Change radius per RADIUS_FEEL (sharp: 0/4/8/12 · soft: 8/12/24/32 · pill: 12/16/32/40). Everything else usually stays. -->

## Spacing scale (4-pt base)
| Token | Value | Typical use |
| --- | --- | --- |
| `space-1` | 4 | Icon-to-label gaps |
| `space-2` | 8 | Inside compact controls |
| `space-3` | 12 | Input padding |
| `space-4` | 16 | Default gap, button padding |
| `space-5` | 20 | — |
| `space-6` | 24 | Card padding (mobile) |
| `space-8` | 32 | Card padding (desktop), section gap (mobile) |
| `space-10` | 40 | — |
| `space-12` | 48 | Section gap |
| `space-16` | 64 | Section gap (desktop) |
| `space-24` | 96 | Hero / major section |
| `space-32` | 128 | Page-level rhythm |

Units: web `rem` (÷16), iOS `pt`, Android `dp`. Values are identical across platforms.

## Radius — feel: {{RADIUS_FEEL}}
| Token | Value | Use |
| --- | --- | --- |
| `radius-sm` | {{RADIUS_SM}} | Inputs, chips, tags |
| `radius-md` | {{RADIUS_MD}} | Buttons (non-pill), small cards |
| `radius-lg` | {{RADIUS_LG}} | Cards, panels, modals |
| `radius-xl` | {{RADIUS_XL}} | Hero cards, large containers |
| `radius-pill` | 999 | Pills, {{BUTTON_SHAPE}} buttons |

## Elevation
| Level | Use | Web | Mobile |
| --- | --- | --- | --- |
| 0 | Flat cards | none | none |
| 1 | Floating header, dropdowns | `0 8px 24px {{INK_HEX}}1F` | 2 dp |
| 2 | Modals, sheets | `0 24px 64px {{INK_HEX}}33` | 8 dp |

## Grids
| Platform | Columns | Gutter | Margin | Max width |
| --- | --- | --- | --- | --- |
| Web ≥ 1280 | 12 | 24 | 32 | 1280 |
| Web 768–1279 | 12 | 24 | 32 | fluid |
| Web < 768 | 4 | 16 | 16 | fluid |
| Tablet app | 8 | 16 | 24 | — |
| Phone app | 4 | 16 | 16 | — |

## Breakpoints (web)
| Token | Min width | Target |
| --- | --- | --- |
| `sm` | 640 | Large phones |
| `md` | 768 | Tablets |
| `lg` | 1024 | Small laptops |
| `xl` | 1280 | Desktop (container max) |
| `2xl` | 1536 | Wide — content stays at 1280 |

## Mobile safe areas
- Respect notch / home indicator insets (`safe-area-inset-*`, `SafeArea`, `WindowInsets`).
- Bottom actions ≥ 16 pt above home indicator.

## Signature layout devices
{{LAYOUT_DEVICES}}
<!-- guidance: describe each device in one line with a CSS/Figma hint, e.g. "The Angle — diagonal split: clip-path: polygon(0 18%, 100% 0, 100% 100%, 0 100%)" -->
