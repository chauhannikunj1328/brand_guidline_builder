# 06 · Iconography & Imagery

## Icons
| Property | Spec |
| --- | --- |
| Base set | Lucide (MIT) — consistent with the brand's rounded geometry |
| Grid | 24 × 24, 2 px padding (20 px live area) |
| Stroke | 1.75 px, round caps and joins |
| Sizes | 16 (inline), 20 (buttons, inputs), 24 (default), 32 (feature), 48 (empty states) |
| Colour | Inherit text colour (`currentColor`). Pampas 800 only for a single highlighted state |
| Fill | Outline by default; filled variant only for "active/selected" states |

Custom icons follow the same grid and stroke. Export as SVG with `stroke="currentColor"`, no embedded fills or IDs.

Platform: web → inline SVG / `lucide-react`; iOS → SF Symbols where an equivalent exists (weight: Medium), else custom; Android → Material Symbols (Rounded, weight 400) or custom vector drawables.

## Photography
- **Subject:** real people using real things; candid over posed.
- **Light:** natural, warm, soft shadows. No heavy filters or HDR.
- **Colour grade:** warm and slightly muted to sit with Pampas; skin tones untouched.
- **Composition:** leave negative space for type on one side.
- **Overlay for text:** `linear-gradient(Grey 950 0% → transparent 60%)` at 60% opacity, or a Pampas 100 panel.
- **Type over photos:** White only. Never Pampas on photos.

## Illustration
- Flat, geometric, built from circles and rounded rectangles — echoes the mark.
- Palette: the Pampas scale, with Grey 950 as the dark value.
- No gradients, no outlines, no 3D.

## Graphic devices
| Device | Description | Where |
| --- | --- | --- |
| The Angle | Diagonal split between two brand colours | Heroes, covers |
| The Card | Rounded tint container | Everywhere |
| The Waterfall | Stepped gradient of the secondary palette | Charts, data |

## Never
- Stock-photo clichés (handshakes, pointing at whiteboards)
- Clip-art, emoji as icons, mixed icon families
- Photos with baked-in text
