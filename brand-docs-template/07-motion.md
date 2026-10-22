# 07 · Motion — {{BRAND_NAME}}

> Motion feel: **{{MOTION_FEEL}}**. It explains what just happened — it never decorates.
<!-- guidance: calm → durations ×1.3, ease-in-out · snappy → defaults below · playful → allow slight overshoot cubic-bezier(0.34,1.56,0.64,1) on entrances -->

## Principles
1. **Quick** — nothing blocks the user. Most transitions ≤ 300 ms.
2. **Directional** — things come from where they're triggered and return there.
3. **Soft** — ease-out on entrance, ease-in on exit.
4. **Optional** — everything works with animation off.

## Tokens
| Token | Value | Use |
| --- | --- | --- |
| `duration-instant` | {{DUR_INSTANT}} ms | Hover, pressed state, toggles |
| `duration-fast` | {{DUR_FAST}} ms | Tooltips, dropdowns, tab switches |
| `duration-base` | {{DUR_BASE}} ms | Modals, sheets, page sections |
| `duration-slow` | {{DUR_SLOW}} ms | Hero reveals, page transitions |
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances |
| `ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exits |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Movement between positions |

Platform: CSS `transition` / Framer Motion; iOS `withAnimation(.timingCurve(…))`; Android `tween(…, easing = CubicBezierEasing(…))`.

## Patterns
| Pattern | Spec |
| --- | --- |
| Hover lift (cards) | translateY −4 px, `duration-instant` |
| Button press | scale 0.97, `duration-instant` |
| Overlay menu | fade + scale from 0.98, `duration-base` |
| Sheet / modal | slide up 24 px + fade, `duration-base` |
| Toast | slide in from bottom, `duration-fast`; auto-dismiss 4 s |
| List stagger | 40 ms between items, max 8 items animated |
| Skeleton loading | shimmer 1.5 s linear loop, tint → bg |

## Brand mark motion
<!-- guidance: define loading, splash and any signature animation of the mark; state what is NOT allowed (e.g. continuous spin in marketing) -->

## Reduced motion
Respect `prefers-reduced-motion` / `UIAccessibility.isReduceMotionEnabled` / Android animator scale: replace movement with opacity-only fades at `duration-fast`.
