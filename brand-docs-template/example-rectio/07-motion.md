# 07 · Motion

> Motion is purposeful and quick. It explains what just happened — it never decorates.

## Principles
1. **Quick** — nothing blocks the user. Most transitions ≤ 300 ms.
2. **Directional** — things come from where they're triggered and return there.
3. **Soft** — ease-out on entrance, ease-in on exit. No bounces.
4. **Optional** — everything works with animation off.

## Tokens
| Token | Value | Use |
| --- | --- | --- |
| `duration-instant` | 100 ms | Hover, pressed state, toggles |
| `duration-fast` | 200 ms | Tooltips, dropdowns, tab switches |
| `duration-base` | 300 ms | Modals, sheets, page sections |
| `duration-slow` | 500 ms | Hero reveals, page transitions |
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances |
| `ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exits |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Movement between positions |

Platform: CSS `transition` / Framer Motion; iOS `withAnimation(.timingCurve(0.16,1,0.3,1, duration: 0.3))`; Android `tween(300, easing = CubicBezierEasing(0.16f,1f,0.3f,1f))`.

## Patterns
| Pattern | Spec |
| --- | --- |
| Hover lift (cards) | translateY −4 px, `duration-instant` |
| Button press | scale 0.97, `duration-instant` |
| Overlay menu | fade + slight scale from 0.98, `duration-base` |
| Sheet / modal | slide up 24 px + fade, `duration-base` |
| Toast | slide in from bottom, `duration-fast`; auto-dismiss 4 s |
| List stagger | 40 ms between items, max 8 items animated |
| Skeleton loading | shimmer 1.5 s linear loop, Cloud → Fog |

## Brand mark motion
- Loading: mark rotates 360° over 1.2 s, `ease-in-out`, loops.
- Splash: mark scales 0.8 → 1 with fade, `duration-slow`, once.
- Never spin the mark continuously in marketing content.

## Reduced motion
Respect `prefers-reduced-motion` / `UIAccessibility.isReduceMotionEnabled` / `Settings.Global.ANIMATOR_DURATION_SCALE`: replace movement with opacity-only fades at `duration-fast`.
