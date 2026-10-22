# 06 · Iconography & Imagery — {{BRAND_NAME}}

## Icons — style: {{ICON_STYLE}}
| Property | Spec |
| --- | --- |
| Base set | {{ICON_SET}} |
| Grid | 24 × 24, 2 px padding (20 px live area) |
| Stroke | {{ICON_STROKE}} px, round caps and joins <!-- guidance: 1.5 light · 1.75 default · 2 bold --> |
| Sizes | 16 (inline), 20 (buttons, inputs), 24 (default), 32 (feature), 48 (empty states) |
| Colour | Inherit text colour (`currentColor`). {{ACCENT_NAME}} only for a single highlighted state |
| Fill | {{ICON_STYLE}} by default; filled variant only for "active/selected" states |

Custom icons follow the same grid and stroke. Export as SVG with `stroke="currentColor"`, no embedded fills or IDs.

Platform: web → inline SVG / icon package; iOS → SF Symbols where an equivalent exists, else custom; Android → Material Symbols or custom vector drawables.

## Photography
{{PHOTO_DIRECTION}}
<!-- guidance: cover subject, light, colour grade, composition, and text-over-photo rule (default: White type only, gradient scrim ink → transparent) -->

## Illustration — style: {{ILLUSTRATION_STYLE}}
<!-- guidance: geometry, palette (which raw colours), outline/no outline, accent usage. Write "Not used" if none. -->

## Graphic devices
| Device | Description | Where |
| --- | --- | --- |
| <!-- guidance: from LAYOUT_DEVICES and the logo's geometry --> | | |

## Never
- Stock-photo clichés (handshakes, pointing at whiteboards)
- Clip-art, emoji as icons, mixed icon families
- Photos with baked-in text
- {{AVOID}}
