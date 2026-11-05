# Rectio brand — instructions for AI coding tools

You are working on an Rectio product. Before generating any UI, copy or assets, read the relevant file in this folder:

- Colours → `03-color.md` and `tokens.json` (`semantic.*`). Use semantic tokens, never raw hex.
- Type → `04-typography.md`. Primary face Geist, display titles Space Grotesk; body is Geist 16 px; sentence case.
- Spacing / radius / grid → `05-spacing-and-layout.md`. 4-pt scale, cards `radius-lg` (16 px), large cards `radius-xl` (32 px), buttons `radius-sm` (8 px).
- Components → `08-components.md`. One primary button per view. Define all states.
- Copy → `01-voice-and-tone.md`. Clear, warm, confident. Buttons = verb + object. Sentence case.
- Accessibility → `09-accessibility.md`. WCAG 2.2 AA minimum, AAA body contrast, 44 px touch targets, visible focus ring.
- Motion → `07-motion.md`. ≤ 300 ms, ease-out in, respect reduced motion.
- Platform specifics → `platforms/web.md`, `platforms/mobile.md`, `platforms/webapp.md`.

Hard rules:
1. Pampas 500 (`#A5846A`) is for the logo, surfaces and large text — never small text. White on Pampas 500 is 3.4:1, so small text on it needs Grey 950.
2. Never place the mark directly beside the wordmark; use the supplied lockups.
3. Never load fonts from a third-party CDN in production.
4. Log brand-affecting changes in `CHANGELOG.md` and bump `tokens.json` version.
