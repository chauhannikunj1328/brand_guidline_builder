# Brand Docs Template

A reusable "brand as code" documentation kit. Fill it once per project and every platform
(website, mobile app, web app, Figma, AI tools) reads from the same source of truth.

## How to use (3 steps)

1. **Fill the brief** — open `BRAND-BRIEF.md` and answer every question. This is the only file you *must* write by hand.
2. **Generate the docs** — give the whole folder + the completed brief to Claude with the prompt in `GENERATE-PROMPT.md`.
   Claude replaces every `{{PLACEHOLDER}}` in `00`–`10`, `platforms/*` and `tokens.json`, and removes the `<!-- guidance -->` comments.
   (Or do it by hand — `PLACEHOLDERS.md` lists every variable.)
3. **Ship it** — commit `brand-docs/` into each project repo (or as a git submodule). Import `tokens.json` into Figma; generate platform tokens for code.

## What's inside

| File | Purpose | Who fills it |
| --- | --- | --- |
| `BRAND-BRIEF.md` | Intake form — all brand details in one place | **You** |
| `GENERATE-PROMPT.md` | Copy-paste prompt for Claude to fill the templates | — |
| `PLACEHOLDERS.md` | Glossary of every `{{VARIABLE}}` | — |
| `00-brand-overview.md` | Purpose, positioning, principles, audience, personality | Generated |
| `01-voice-and-tone.md` | Voice, tone by context, writing rules, UX microcopy | Generated |
| `02-logo.md` | Elements, colourways, clearspace, sizes, platform icons, don'ts | Generated |
| `03-color.md` | Raw palette → semantic tokens (light/dark), pairings, contrast | Generated |
| `04-typography.md` | Families, weights, cross-platform type scale | Generated |
| `05-spacing-and-layout.md` | Spacing, radius, elevation, grids, breakpoints | Generated (mostly defaults) |
| `06-iconography-and-imagery.md` | Icons, photography, illustration, graphic devices | Generated |
| `07-motion.md` | Durations, easing, patterns, reduced motion | Generated (mostly defaults) |
| `08-components.md` | Platform-agnostic component specs with states | Generated (mostly defaults) |
| `09-accessibility.md` | WCAG baseline + checklist | Defaults — rarely changes |
| `10-assets-and-naming.md` | Folder structure, naming, export specs, versioning | Generated |
| `platforms/web.md` · `mobile.md` · `webapp.md` | Where each platform diverges | Generated |
| `tokens.json` | W3C DTCG design tokens — the design ↔ code bridge | Generated |
| `CHANGELOG.md` | Versioned brand history | Generated, then maintained |
| `CLAUDE.md` | Brief for AI coding tools working in the project | Generated |

## Conventions inside the templates

- `{{VARIABLE}}` — must be replaced. Names are listed in `PLACEHOLDERS.md`.
- `<!-- guidance: … -->` — instructions for whoever fills the file. Delete after filling.
- Tables and rules without placeholders are **recommended defaults** — keep unless the brand needs otherwise.

## Worked example

`example-rectio/` is a fully filled set for a placeholder brand ("Rectio"). Use it to see what a finished
output looks like, and as a reference when reviewing generated docs.
