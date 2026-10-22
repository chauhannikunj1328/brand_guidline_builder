# 09 · Accessibility

> Target: **WCAG 2.2 AA** everywhere, **AAA for body text contrast**. Accessibility is part of the brand, not a compliance layer.

## Colour & contrast
- Body text ≥ 7 : 1 (AAA). Large text and UI labels ≥ 4.5 : 1. Non-text UI (borders, icons) ≥ 3 : 1.
- Never convey meaning with colour alone — pair with icon, label or pattern.
- Coral is never used for text on light backgrounds.
- Provide a dark theme; test both with the contrast table in `03-color.md`.

## Typography
- Minimum body 16 px web / 16 sp Android / 17 pt iOS.
- Support Dynamic Type and font scaling up to 200% without clipping.
- Line-height ≥ 1.5 for body; paragraph spacing ≥ 1.5× line height.

## Touch & pointer
- Touch targets ≥ 44 × 44 pt (iOS) / 48 × 48 dp (Android) / 24 × 24 px CSS minimum (WCAG 2.5.8), 8 px spacing between.
- Hover is never the only way to reveal content.

## Keyboard & focus
- Everything interactive is reachable and operable by keyboard; logical tab order.
- Visible focus ring: 2 px `focus/ring` (Coral), 2 px offset — never `outline: none` without replacement.
- Skip-to-content link on every web page.
- Overlay menu / modals trap focus and restore it on close; Esc closes.

## Screen readers
- Semantic HTML / native controls first; ARIA only to fill gaps.
- Every image: `alt` (or empty `alt=""` if decorative). Logo alt = "Rectio".
- Icon-only buttons have an accessible name (`aria-label`, `accessibilityLabel`, `contentDescription`).
- Announce toasts and errors with live regions / `UIAccessibility.post` / `announceForAccessibility`.

## Motion
- Honour reduced-motion settings (see `07-motion.md`). No auto-playing video with sound; no flashing > 3 Hz.

## Forms
- Visible labels, not placeholder-only. Errors in text, adjacent to the field, and summarised at the top.
- Don't time out without warning.

## Checklist before shipping
- [ ] Contrast checked in light and dark
- [ ] Keyboard-only walkthrough
- [ ] Screen-reader walkthrough (VoiceOver / TalkBack / NVDA)
- [ ] 200% text scale
- [ ] Reduced motion on
- [ ] Automated scan (axe / Lighthouse / Accessibility Inspector) — 0 critical
