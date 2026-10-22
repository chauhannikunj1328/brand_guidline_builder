# Rectio

A brand-system kit: write a brand once, then reuse it across docs, design tokens, assets and a brand-guidelines website.

| Folder | What it is |
| --- | --- |
| `brand-docs-template/` | Blank brand docs kit: brief → AI prompt → `00`–`10` docs, platform guides, `tokens.json` |
| `brand-docs/` | Rectio brand docs (filled-in example). `generated/` holds the token outputs |
| `brand-assets/<brand>/` | Source logo, font, icon and imagery files, named per doc `10` |
| `brand-center-base/` | Brand-guidelines website, unbranded starter (port 3001) |
| `brand-center-rectio/` | Same website styled for Rectio (port 3000) |
| `scripts/` | Token, contrast, asset, check, onboarding and release scripts |
| `rectio.config.json` | Registry of brands: status, and where each brand's docs, assets and site live |

## Setup

```bash
npm run setup
```

## Commands

| Command | Does |
| --- | --- |
| `npm run status` | Table of every brand and its status |
| `npm run new-brand -- <slug> "<Name>"` | Start a brand from the template |
| `npm run tokens [-- <slug>]` | `tokens.json` → CSS (light + dark), JS, Swift, Kotlin |
| `npm run contrast [-- <slug>]` | WCAG contrast check on the semantic colour pairs |
| `npm run assets [-- <slug>]` | Validate asset names and build the download zip |
| `npm run check` / `check:quick` | Every check above, plus lint, typecheck and (full only) production build |
| `npm run release -- <slug>` | Verify, rebuild and tag `<slug>@v<version>` |
| `npm run dev:rectio` / `dev:base` | Run a website locally |

How to commit, branch and version: see [CONTRIBUTING.md](CONTRIBUTING.md).
