# Translation glossary and review status

Spanish and Arabic were written by Claude. **They have not been reviewed by a native speaker.** Review them before treating them as final.

Keep these terms the same in every page so the site reads as one voice. English is the source: Spanish and Arabic files must have exactly the same keys (the TypeScript build checks this).

| English | Español | العربية | Note |
| --- | --- | --- | --- |
| Rectio | Rectio | Rectio | Never translated or transliterated |
| Brand Foundation | Fundamentos de marca | أساس العلامة | |
| Brand Voice | Voz de marca | صوت العلامة | |
| Brand Identity | Identidad de marca | هوية العلامة | |
| The Spark / Spark | La Chispa / Chispa | الشرارة | The mark's nickname |
| Wordmark | Logotipo | الشعار النصي | |
| Color | Color | اللون | |
| Typography / Type | Tipografía | الطباعة | |
| Layout | Maquetación | التخطيط | |
| Brand OS | Brand OS | Brand OS | Product-style name, kept |
| Lockups | Combinaciones de logotipo | تركيبات الشعار | |
| Trademarks | Marcas registradas | العلامات التجارية | |
| Contact | Contacto | تواصل معنا | |
| Make it simple. Make it yours. | Hazlo simple. Hazlo tuyo. | اجعله بسيطاً. اجعله لك. | Tagline |

## Rules
- Brand names (Rectio, Geist, Space Grotesk, Brand OS) and the contact person's name stay in Latin letters, in every language.
- Arabic is written right to left. Wrap Latin names and email addresses in `<bdi>` so they don't scramble the sentence.
- Use "tú" (informal) in Spanish, matching the English voice: plain, warm, direct.

## Adding a page
1. Add the page's text under `content/i18n/<lang>/<page>.json` for all three languages and load it in `lib/i18n/dictionaries.ts`.
2. Add the page's path to `TRANSLATED` in `lib/i18n/config.ts`. Until then the language switcher and links keep visitors on the English page.
