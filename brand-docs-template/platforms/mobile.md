# Platform · Mobile app — {{BRAND_NAME}}

Stack: {{MOBILE_STACK}}. Tokens are identical to web; only the syntax differs.

## Tokens → code
| Token type | iOS | Android |
| --- | --- | --- |
| Colour | Asset Catalog colour sets with light/dark appearances | `Color(0xFF{{PRIMARY_HEX_RAW}})` in `Color.kt` + Material 3 `ColorScheme` |
| Type | `Font.custom("{{DISPLAY_FONT_FILE}}-Light", size: 34, relativeTo: .largeTitle)` | `FontFamily(Font(R.font.{{DISPLAY_FONT_RES}}))` + `Typography()` |
| Spacing | `enum Spacing { static let s4: CGFloat = 16 }` | `object Spacing { val s4 = 16.dp }` |
| Radius | `RoundedRectangle(cornerRadius: {{RADIUS_LG}})` | `RoundedCornerShape({{RADIUS_LG}}.dp)` |

Generate all of the above from `tokens.json` (Style Dictionary has iOS/Android transforms).

## Navigation
- Bottom tab bar, 3–5 items, 24 px icons, `label` text. Active = {{PRIMARY_NAME}}.
- Header: <!-- guidance: floating pill / standard large title / none --> — hides on scroll-down, returns on scroll-up.
- Use native back behaviour; never a custom back gesture.

## Native conventions we keep
| | iOS | Android |
| --- | --- | --- |
| Icons | SF Symbols | Material Symbols |
| Sheets | `.sheet` with detents | `ModalBottomSheet` |
| Haptics | `.impact(.light)` on primary actions | `HapticFeedbackConstants.CONFIRM` |
| Text scaling | Dynamic Type | `sp` + font scale |
| Status bar | Light content on {{PRIMARY_NAME}}/{{INK_NAME}} | Same; edge-to-edge |

## Brand moments
- Splash: stacked lockup, reverse colourway, mark scale-in {{DUR_SLOW}} ms once.
- App icon: {{APP_ICON_RULE}} (see `02-logo.md`).
- Empty states use the illustration style from `06`.
- Pull-to-refresh / loading: <!-- guidance: from 07 brand mark motion -->

## Density
Body 17 pt / 16 sp. Row height 56. Card padding 24. Buttons 48 tall. Touch targets ≥ 44 / 48.

## Dark mode
{{DARK_MODE}}. Map semantic tokens from `03-color.md` dark column. Mark stays {{MARK_COLOR_NAME}}; wordmark switches to White.
