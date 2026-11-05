# 05 · Spacing & Layout

## Spacing scale (4-pt base)
| Token | Value | Typical use |
| --- | --- | --- |
| `space-0` | 0 | — |
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

## Radius
| Token | Value | Use |
| --- | --- | --- |
| `radius-sm` | 8 | Buttons, inputs, chips, tags |
| `radius-md` | 12 | Small cards |
| `radius-lg` | 16 | Cards, panels, modals |
| `radius-xl` | 32 | Hero cards, large containers |
| `radius-pill` | 999 | Tags, avatars, pill tabs |

Cards are the signature container: `radius-lg`, `space-6`/`space-8` padding, 1 px `border/default` or a tint fill — never both plus a shadow.

## Elevation
| Level | Use | Web | Mobile |
| --- | --- | --- | --- |
| 0 | Flat cards | none | none |
| 1 | Floating header, dropdowns | `0 8px 24px rgba(17,28,68,.12)` | 2 dp |
| 2 | Modals, sheets | `0 24px 64px rgba(17,28,68,.20)` | 8 dp |

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
- Floating header: 16 pt from top inset, 16 pt side margins, `radius-md`.
- Bottom actions: ≥ 16 pt above home indicator.

## Signature layout devices
- **Side rail** — a sticky 276 px rail lists the page's sections beside the content on desktop.
- **Tint card** — Pampas 100 background, centred display headline, one CTA.
