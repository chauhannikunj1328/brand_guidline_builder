# 02 · Logo — {{BRAND_NAME}}

## Elements
| Element | Description | Use | File |
| --- | --- | --- | --- |
| **Mark** | {{MARK_DESCRIPTION}} | App icons, favicons, small spaces, avatars | `logo/{{BRAND_SLUG}}-mark-*.svg` |
| **Wordmark** | {{WORDMARK_DESCRIPTION}} | Headers, documents, signage | `logo/{{BRAND_SLUG}}-wordmark-*.svg` |
| **Lockup — horizontal** | Mark + wordmark, side by side | Wide formats | `logo/{{BRAND_SLUG}}-lockup-h-*.svg` |
| **Lockup — stacked** | Mark above wordmark | Square/tall formats | `logo/{{BRAND_SLUG}}-lockup-v-*.svg` |

Mark and wordmark placement rule: **{{LOCKUP_RULE}}**.

## Colourways
| Name | Mark | Wordmark | Background |
| --- | --- | --- | --- |
| Primary | {{MARK_COLOR_NAME}} | {{WORDMARK_COLOR_NAME}} | White / light |
| Reverse | {{MARK_COLOR_NAME}} | White | {{PRIMARY_NAME}} / {{INK_NAME}} / photo |
| Mono light | White | White | Dark backgrounds |
| Mono dark | {{INK_NAME}} | {{INK_NAME}} | One-colour print |

## Clearspace
Minimum clear space = **{{CLEARSPACE_RULE}}** on all sides. For the wordmark, clear space = cap height.

## Minimum sizes
| Element | Digital | Print |
| --- | --- | --- |
| Mark | {{MIN_SIZE_DIGITAL}} | {{MIN_SIZE_PRINT}} |
| Wordmark | 80 px width | 25 mm |
| Lockup | 120 px width | 35 mm |

## Platform-specific
| Platform | Asset | Spec |
| --- | --- | --- |
| Favicon | {{APP_ICON_RULE}} | 32/48/180 px, `favicon.ico` + `apple-touch-icon.png` + `icon.svg` |
| iOS app icon | {{APP_ICON_RULE}}, square corners in file (iOS masks) | 1024 × 1024 PNG |
| Android adaptive icon | mark as foreground, {{PRIMARY_NAME}} background layer | 108 dp canvas, 72 dp safe zone |
| Splash screen | stacked lockup, reverse colourway | centred, ≤ 40% viewport width |
| Social avatar | {{APP_ICON_RULE}} | 400 × 400 PNG, mark at 50% |
| OG image | horizontal lockup, reverse | 1200 × 630 |

## Don'ts
- No unapproved colours · no gradients · no outlines · no shadows
- No stretching, rotating, cropping or partial opacity
- No patterns made from the mark
- Don't re-typeset the wordmark in a font — always use the artwork
- Don't place on low-contrast backgrounds (see `03-color.md`)
<!-- guidance: add brand-specific don'ts, e.g. "never separate the elements of the mark" -->
