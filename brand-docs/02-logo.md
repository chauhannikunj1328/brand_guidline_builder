# 02 · Logo

## Elements
| Element | Use | File |
| --- | --- | --- |
| **Mark** | App icons, favicons, small spaces, social avatars | `logo/rectio-mark-*.svg` |
| **Wordmark** | Headers, documents, signage, anywhere the name must be read | `logo/rectio-wordmark-*.svg` |
| **Lockup — horizontal** | Wide formats (web header, email, letterhead) | `logo/rectio-lockup-h-*.svg` |
| **Lockup — stacked** | Square/tall formats (splash screens, badges) | `logo/rectio-lockup-v-*.svg` |

The mark and wordmark may share a composition but are **never placed side by side** except in the supplied lockups.

## Colourways
| Name | Mark | Wordmark | Background |
| --- | --- | --- | --- |
| Primary | Signal Coral `#FF6B4A` | Rectio Indigo `#4338CA` | White / light |
| Reverse | Signal Coral | White | Indigo / Midnight / photo |
| Mono light | White | White | Dark backgrounds where coral clashes |
| Mono dark | Midnight `#111C44` | Midnight | Print in one colour |

## Clearspace
Minimum clear space = **½ the mark's height** (`x/2`) on all sides. For the wordmark, clear space = cap height.

## Minimum sizes
| Element | Digital | Print |
| --- | --- | --- |
| Mark | 16 px height | 6 mm (0.25 in) |
| Wordmark | 80 px width | 25 mm (1 in) |
| Lockup | 120 px width | 35 mm |

## Platform-specific
| Platform | Asset | Spec |
| --- | --- | --- |
| Favicon | mark on indigo | 32/48/180 px, `favicon.ico` + `apple-touch-icon.png` |
| iOS app icon | mark on indigo, no rounded corners in file (iOS masks) | 1024 × 1024 PNG |
| Android adaptive icon | mark as foreground, indigo background layer | 108 dp canvas, 72 dp safe zone |
| Splash screen | stacked lockup, reverse colourway | centred, ≤ 40% viewport width |
| Social avatar | mark on indigo | 400 × 400 PNG, mark at 50% |
| OG image | horizontal lockup, reverse | 1200 × 630 |

## Don'ts
- No unapproved colours · no gradients · no outlines · no shadows
- No stretching, rotating, cropping or partial opacity
- No patterns made from the mark
- Don't re-typeset the wordmark in a font — always use the artwork
- Don't place on low-contrast backgrounds (see `03-color.md` contrast table)
