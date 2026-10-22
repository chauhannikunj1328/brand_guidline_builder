# Rectio brand — instructions for AI coding tools

You are working on an Rectio product. Before generating any UI, copy or assets, read the relevant file in this folder:

- Colours → `03-color.md` and `tokens.json` (`semantic.*`). Use semantic tokens, never raw hex.
- Type → `04-typography.md`. Display sizes use weight 300; body is Inter 16 px; sentence case.
- Spacing / radius / grid → `05-spacing-and-layout.md`. 4-pt scale, cards `radius-lg` (24 px), buttons pill.
- Components → `08-components.md`. One primary button per view. Define all states.
- Copy → `01-voice-and-tone.md`. Clear, warm, confident. Buttons = verb + object. Sentence case.
- Accessibility → `09-accessibility.md`. WCAG 2.2 AA minimum, AAA body contrast, 44 px touch targets, visible focus ring.
- Motion → `07-motion.md`. ≤ 300 ms, ease-out in, respect reduced motion.
- Platform specifics → `platforms/web.md`, `platforms/mobile.md`, `platforms/webapp.md`.

Hard rules:
1. Coral (`#FF6B4A`) is for the mark, accents and focus rings — never body text.
2. Never place the mark directly beside the wordmark; use the supplied lockups.
3. Never load fonts from a third-party CDN in production.
4. Log brand-affecting changes in `CHANGELOG.md` and bump `tokens.json` version.
