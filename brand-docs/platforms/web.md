# Platform · Website (marketing / brand center)

Stack: Next.js (App Router) + Tailwind v4. Reference implementation: `../../brand-center-template/`.

## Tokens → code
- `app/globals.css` `:root` = semantic tokens from `tokens.json` (generate with Style Dictionary or copy by hand).
- Tailwind `@theme inline` maps `--brand-*` → `bg-primary`, `text-ink` etc. Components never use raw hex.
- Fonts via `next/font` (self-hosted), exposed as `--font-display` / `--font-body`.

## Layout
- Container 1280 px, 32 px margins (16 px < 768).
- Floating pill header, full-screen overlay menu (see `08-components.md`).
- Sections: `py-16` mobile → `py-32` desktop. Hero ≥ 90 vh.
- Fluid display type with `clamp()` (see `04-typography.md`).

## Performance & SEO
- LCP < 2.5 s: hero is CSS/SVG, not a raster image. Images via `next/image`, AVIF/WebP.
- `metadata` per page: title template `%s · Rectio`, OG image 1200 × 630 (reverse lockup).
- Favicon set: `favicon.ico`, `icon.svg`, `apple-touch-icon.png`, `manifest.webmanifest` (theme colour Indigo).

## Interaction
- Hover states exist here (unlike mobile): card lift, button brightness.
- Scroll-snap carousels with keyboard-accessible arrow buttons.
- Sticky in-page side-nav with IntersectionObserver active state.

## Dark mode
Marketing site is **light-only** by design (brand colours are the "dark"). Web app and mobile support dark.
