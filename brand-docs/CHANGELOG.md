# Brand Changelog

All notable changes to the Rectio brand. Versions follow `tokens.json`.

## [2.1.0] — 2026-11-06
### Added
- Font files for Geist, Geist Mono and Space Grotesk, with their licenses, in the assets and the download zip.

### Fixed
- Typo in a Brand OS Tiles example ("onn groceries").
- Logo guide no longer describes a separate small-use wordmark, which doesn't exist in the Figma.

## [2.0.1] — 2026-11-06
### Fixed
- Primary buttons move from Pampas 500 to Pampas 700 (5.8:1), with Pampas 800 on hover. This differs from the Figma, which uses Pampas 500.
- Color page accessibility samples and wording now match measured contrast. White on Pampas 500 passes AA for large text only.
- Panels with small white text move to Pampas 700. Colour samples that must show Pampas 500 use Black text. These differ from the Figma.
- Removed the `action.primary` contrast waiver. The `bg.brand` waiver stays, limited to logos and large text.

## [2.0.0] — 2026-11-06
### Changed
- **Breaking:** palette replaced with the Figma values. Pampas and Grey scales replace Indigo, Coral, Midnight, Cloud, Sky, Fog and Slate. Token names change.
- **Breaking:** typefaces changed. Geist replaces Plus Jakarta Sans and Inter, Space Grotesk added for display titles, Geist Mono replaces JetBrains Mono.
- `radius.lg` is now 16 px. Buttons use 8 px corners instead of pill.
- Logo files replaced with the real Spark, wordmark and horizontal lockup. New app icons and favicon.
- Logo clear space and minimum sizes now match the Figma.
- Contrast waivers replaced: white on Pampas 500 (3.44:1) is waived pending a design decision.

### Added
- Dark semantic tokens derived from the Pampas scale. Not yet designed in Figma.

### Removed
- "The Angle" and floating pill header layout devices, which are not in the Figma.

## [1.0.0] — 2026-09-18
### Added
- Initial brand system: purpose, principles, voice, logo, colour, typography, spacing, iconography, motion, components, accessibility.
- `tokens.json` (W3C DTCG) with light/dark semantic tokens.
- Platform guides for website, mobile and web app.
- Brand Center website template.
