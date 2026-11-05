# 02 · Logo

## Elements
| Element | Use | File |
| --- | --- | --- |
| **The Spark** (mark) | App icons, favicons, small spaces, social avatars | `logo/svg/rectio-mark-*.svg` |
| **Small-use Spark** | Below 48 px. A separate drawing, not a scaled copy | `logo/svg/rectio-mark-mono-small.svg` |
| **Wordmark** | Headers, documents, signage, anywhere the name must be read | `logo/svg/rectio-wordmark-*.svg` |
| **Lockup, horizontal** | Wide formats (web header, email, letterhead) | `logo/svg/rectio-lockup-h-*.svg` |

Lockup spacing: gap = 26% of the Spark's height, wordmark height = 48% of the Spark's height. The Spark and wordmark are **never placed side by side** except in the supplied lockup. A stacked lockup is not drawn yet.

## Colourways
| Name | Logo | Background |
| --- | --- | --- |
| Primary | Pampas 500 `#A5846A` | White |
| Reverse | White | Pampas 500 |
| Small-scale | Dark Pampas (Pampas 950 `#2D211D`) | Light Pampas (Pampas 200), for maximum contrast and legibility |
| Mono | Black or White | One-colour print, or backgrounds where Pampas clashes |

## Clearspace
Spark: clear space = **half the height of the Spark** on all sides. Wordmark: clear space = **half the height of the letter "R"**.

## Minimum sizes
| Element | Digital | Print |
| --- | --- | --- |
| Spark | 16 px height | 0.25 in height |
| Wordmark, standard | 24 px height | 0.25 in height |
| Wordmark, small use | 14 px height | 0.15 in height |

The small-use wordmark is drawn for small sizes and is not interchangeable with the standard one.

## Platform-specific
| Platform | Asset | Spec |
| --- | --- | --- |
| Favicon | white small-use Spark on Pampas 500 | 16/32 px, full Spark at 48 px, `favicon.ico` + `apple-touch-icon.png` (180 px) |
| iOS app icon | white Spark on Pampas 500, no rounded corners in file (iOS masks) | 1024 × 1024 PNG |
| Android adaptive icon | white Spark as foreground, Pampas 500 background layer | 108 dp canvas, 72 dp safe zone |
| Splash screen | horizontal lockup, reverse colourway | centred, ≤ 40% viewport width |
| Social avatar | white Spark on Pampas 500 | 400 × 400 PNG, Spark at 50% |
| OG image | horizontal lockup, reverse | 1200 × 630 |

## Don'ts
- No unapproved colours · no gradients · no outlines · no shadows
- No stretching, rotating, cropping or partial opacity
- No patterns made from the mark
- Don't re-typeset the wordmark in a font — always use the artwork
- Don't place on low-contrast backgrounds (see `03-color.md` contrast table)
