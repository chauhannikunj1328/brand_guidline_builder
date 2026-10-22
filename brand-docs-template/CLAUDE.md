# {{BRAND_NAME}} brand — instructions for AI coding tools

You are working on a {{BRAND_NAME}} product. Before generating any UI, copy or assets, read the relevant file in this folder:

- Colours → `03-color.md` and `tokens.json` (`semantic.*`). Use semantic tokens, never raw hex.
- Type → `04-typography.md`. Display = {{DISPLAY_FONT}} {{DISPLAY_WEIGHT}}; body = {{BODY_FONT}} {{BASE_SIZE}} px; {{CASE_RULE}}.
- Spacing / radius / grid → `05-spacing-and-layout.md`. 4-pt scale, cards `radius-lg`, buttons {{BUTTON_SHAPE}}.
- Components → `08-components.md`. One primary button per view. Define all states.
- Copy → `01-voice-and-tone.md`. {{VOICE_1}}, {{VOICE_2}}, {{VOICE_3}}, {{VOICE_4}}. Buttons = verb + object.
- Accessibility → `09-accessibility.md`. {{A11Y_TARGET}}, 44 px touch targets, visible focus ring.
- Motion → `07-motion.md`. ≤ {{DUR_BASE}} ms, ease-out in, respect reduced motion.
- Platform specifics → `platforms/web.md`, `platforms/mobile.md`, `platforms/webapp.md`.

Hard rules:
1. {{ACCENT_NAME}} (`{{ACCENT_HEX}}`) is for the mark, accents and focus rings — as text: {{ACCENT_AS_TEXT}}.
2. Mark/wordmark placement: {{LOCKUP_RULE}}.
3. Never load fonts from a third-party CDN in production.
4. Log brand-affecting changes in `CHANGELOG.md` and bump `tokens.json` version.
