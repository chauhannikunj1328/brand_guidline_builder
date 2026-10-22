# Working on Rectio

## Commits — Conventional Commits

`<type>(<scope>): <summary>` in the imperative, lowercase, no full stop.

| Type | Use for |
| --- | --- |
| `feat` | New page, section, script, token or brand |
| `fix` | Bug or wrong value |
| `docs` | Brand docs or READMEs only |
| `style` | Visual tweaks with no behaviour change |
| `refactor` | Code moves/cleanups with no visual change |
| `chore` | Dependencies, config, tooling |
| `ci` | GitHub Actions |

Scopes: a brand slug (`rectio`, `base`), or `template`, `tokens`, `assets`, `scripts`, `site`, `ci`.

Examples: `feat(rectio): add lockup svgs` · `fix(tokens): darken slate for AA` · `docs(template): clarify motion defaults`.

## Branches

- `main` is always releasable — CI must be green.
- Work on `feat/<topic>`, `fix/<topic>` or `brand/<slug>` branches; merge with a pull request.

## Brand lifecycle

`draft → in-review → approved → live` (the base starter is `template`). Status lives in `rectio.config.json`.

| Step | Command |
| --- | --- |
| Start a brand | `npm run new-brand -- <slug> "<Name>"` |
| See every brand | `npm run status` |
| Check one brand quickly | `npm run check:quick -- <slug>` |
| Build tokens / asset zip | `npm run tokens -- <slug>` · `npm run assets -- <slug>` |
| Release | `npm run release -- <slug>` |

## Versioning and tags

Each brand is versioned on its own. The version lives in `<docs>/tokens.json` and must match the newest
entry in `<docs>/CHANGELOG.md`.

- **major** — palette or typeface change
- **minor** — new tokens, pages or assets
- **patch** — value tweaks and copy fixes

`npm run release -- <slug>` checks all of that, rebuilds tokens and assets, and tags `<slug>@v<version>` (e.g. `rectio@v1.0.0`).

## Rules

1. Brand values (colour, type, radius…) are edited in `tokens.json` only, then `npm run tokens`. Never edit `generated/`.
2. Contrast failures are fixed in tokens, or recorded with a reason in `contrastWaivers` — never ignored silently.
3. Run `npm run check` before opening a pull request. CI runs the same command.
