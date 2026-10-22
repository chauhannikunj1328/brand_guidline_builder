# Platform · Mobile app (iOS / Android)

Stack options: SwiftUI + Jetpack Compose (native) or React Native / Expo. Tokens are identical; only the syntax differs.

## Tokens → code
| Token type | iOS | Android |
| --- | --- | --- |
| Colour | `Color("brand/indigo")` in Asset Catalog with light/dark appearances | `Color(0xFF4338CA)` in `Color.kt` + Material 3 `ColorScheme` |
| Type | `Font.custom("PlusJakartaSans-Light", size: 34, relativeTo: .largeTitle)` | `FontFamily(Font(R.font.plus_jakarta_sans_light))` + `Typography()` |
| Spacing | `enum Spacing { static let s4: CGFloat = 16 }` | `object Spacing { val s4 = 16.dp }` |
| Radius | `RoundedRectangle(cornerRadius: 24)` | `RoundedCornerShape(24.dp)` |

Generate all of the above from `tokens.json` (Style Dictionary has iOS/Android transforms).

## Navigation
- Bottom tab bar, 3–5 items, 24 px icons, `label` text. Active = Indigo.
- Floating pill header inset 16 pt from safe area; hides on scroll-down, returns on scroll-up.
- Use native back behaviour; never a custom back gesture.

## Native conventions we keep
| | iOS | Android |
| --- | --- | --- |
| Icons | SF Symbols (Medium) | Material Symbols Rounded |
| Sheets | `.sheet` with detents | `ModalBottomSheet` |
| Haptics | `.impact(.light)` on primary actions | `HapticFeedbackConstants.CONFIRM` |
| Text scaling | Dynamic Type | `sp` + font scale |
| Status bar | Light content on Indigo/Midnight | Same; edge-to-edge |

## Brand moments
- Splash: stacked lockup, reverse colourway, mark scale-in 500 ms once.
- App icon: coral mark on indigo (see `02-logo.md`).
- Empty states use the illustration style from `06`.
- Pull-to-refresh spinner: mark rotating (see `07-motion.md`).

## Density
Body 17 pt / 16 sp. Row height 56. Card padding 24. Buttons 48 tall, pill. Touch targets ≥ 44 / 48.

## Dark mode
Required. Map semantic tokens from `03-color.md` dark column. Logo mark stays Coral; wordmark switches to White.
