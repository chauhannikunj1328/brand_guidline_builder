# 08 · Components

> Platform-agnostic specs. Each platform implements these natively; the *feel* must match, the widget may differ.
> States every interactive component must define: default · hover (web) · pressed · focus · disabled · loading.

## Button
| Variant | Fill | Text | Border | Use |
| --- | --- | --- | --- | --- |
| Primary | `action/primary` | `text/on-brand` | none | One per view |
| Secondary | `bg/surface-tint` | `text/primary` | none | Supporting actions |
| Outline | transparent | current | 1 px current | On brand/dark surfaces |
| Ghost | transparent | `text/link` | none | Tertiary, inline |
| Destructive | `danger` | white | none | Irreversible actions |

- Shape: **pill** (`radius-pill`). Height: 40 (sm) · 48 (md) · 56 (lg). Padding X: 16 / 24 / 32.
- Type: `label`, weight 500. Icon 20 px, gap `space-2`.
- Hover: brightness +10%. Pressed: scale 0.97. Focus: 2 px `focus/ring` offset 2 px. Disabled: 40% opacity.
- Min touch target 44 × 44 (iOS) / 48 × 48 (Android).

## Input
- Height 48, `radius-sm`, 1 px `border/default`, padding X `space-4`, `body` text.
- Label above (`label`, `text/secondary`), helper/error below (`caption`).
- Focus: border `action/primary` + 2 px ring. Error: border `danger`, icon 20 px.
- Never rely on placeholder as label.

## Card
- `bg/surface` + 1 px `border/default`, **or** `bg/surface-tint` with no border.
- `radius-lg`, padding `space-6` (mobile) / `space-8` (desktop).
- Optional hover lift (web). Whole card is the tap target if it links.

## Navigation
| Platform | Pattern |
| --- | --- |
| Website | Floating pill header + full-screen overlay menu |
| Web app | Left sidebar (240 px, collapsible to 64) + top bar |
| Mobile | Bottom tab bar (3–5 items) + floating pill header |
Active item: `text/link` + weight 600. Icons 24 px.

## Modal / Sheet
- Web: centred modal, max-width 560, `radius-lg`, elevation 2, scrim Midnight 60%.
- Mobile: bottom sheet, `radius-xl` top corners, drag handle 36 × 4.
- Always dismissible via close button, scrim tap, Esc / back.

## Toast
- Bottom-centre (web) / above tab bar (mobile). `bg/inverse`, `text/on-brand`, `radius-md`, elevation 1.
- Icon 20 px + `body-sm`. Optional single action. Auto-dismiss 4 s; errors persist.

## Tabs / Segmented control
- Pill tabs on dark surfaces (see brand center "Logo Notes"): 1 px border, active = white fill + Midnight text.
- Underline tabs on light surfaces: 2 px `action/primary` indicator, `duration-fast` slide.

## Swatch / Colour chip
- Aspect 3:4 card, name top-left (`overline`), values bottom-left (mono `caption`), copy button bottom-right.

## Table / List
- Row height 56, 1 px `border/default` dividers, header `overline`.
- Mobile: collapse to stacked cards below `md`.

## Empty state
- 48 px icon, `heading-3`, `body` explainer (≤ 2 lines), one primary action. Centred, max-width 360.
