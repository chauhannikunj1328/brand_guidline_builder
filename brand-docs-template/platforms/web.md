# Platform · Website — {{BRAND_NAME}}

Stack: {{WEB_STACK}}.

## Tokens → code
- CSS `:root` = semantic tokens from `tokens.json` (generate with Style Dictionary or copy by hand).
- Tailwind `@theme` maps `--brand-*` → utilities (`bg-primary`, `text-ink`…). Components never use raw hex.
- Fonts self-hosted (`next/font` or `@font-face` WOFF2), exposed as `--font-display` / `--font-body`.

## Layout
- Container 1280 px, 32 px margins (16 px < 768).
- Navigation: {{WEB_NAV_PATTERN}}.
- Sections: `py-16` mobile → `py-32` desktop. Hero ≥ 90 vh.
- Fluid display type with `clamp()` (see `04-typography.md`).
- Signature devices: {{LAYOUT_DEVICES}}.

## Performance & SEO
- LCP < 2.5 s: prefer CSS/SVG heroes over large rasters. Images via `next/image`, AVIF/WebP.
- `metadata` per page: title template `%s · {{BRAND_NAME}}`, OG image 1200 × 630 (reverse lockup).
- Favicon set: `favicon.ico`, `icon.svg`, `apple-touch-icon.png`, `manifest.webmanifest` (theme colour {{PRIMARY_HEX}}).

## Interaction
- Hover states exist here (unlike mobile): card lift, button brightness.
- Carousels: scroll-snap + keyboard-accessible arrow buttons.
- Long pages: sticky in-page side-nav with IntersectionObserver active state.

## Dark mode
{{DARK_MODE}} <!-- guidance: state clearly whether the marketing site is light-only -->
