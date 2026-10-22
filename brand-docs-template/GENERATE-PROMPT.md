# Prompt to generate a filled brand-docs set

Copy everything below the line into Claude (Claude Code, claude.ai, or the API) together with this folder
and your completed `BRAND-BRIEF.md`.

---

You are filling in a brand documentation template for a new brand.

**Inputs**
1. The completed `BRAND-BRIEF.md` (the source of truth for all brand details).
2. The template files: `00-…` through `10-…`, `platforms/*.md`, `tokens.json`, `CHANGELOG.md`, `CLAUDE.md`.
3. `PLACEHOLDERS.md` — the glossary of every `{{VARIABLE}}`.

**Task**
Produce a complete `brand-docs/` folder for this brand:

1. Replace every `{{VARIABLE}}` with the value from the brief. Where the brief says `TBD`, use the default noted in the template or `PLACEHOLDERS.md`, and add it to a "Assumptions" list at the end of your reply.
2. Remove all `<!-- guidance: … -->` comments.
3. Compute what can be computed:
   - Contrast ratios for every pairing in `03-color.md` (WCAG 2.x formula), and mark AA/AAA/fail.
   - Dark-mode semantic tokens if `DARK_MODE` is not "none" — derive from the palette, keep accent unchanged.
   - RGB from HEX where RGB is missing.
4. Keep every recommended default (spacing scale, component states, accessibility rules) unless the brief contradicts it.
5. Write in the brand's voice attributes from section 2 of the brief, but keep documentation tone neutral and precise.
6. Validate `tokens.json` is valid JSON and every `{…}` alias resolves.
7. Do not invent logos, imagery or fonts that aren't in the brief; describe what is there.

**Output**
Write the files to disk in a `brand-docs/` folder (if you can), otherwise output each file in full, one code block per file, with its path as the heading. Finish with the "Assumptions" list.
