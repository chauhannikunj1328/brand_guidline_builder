# Rectio — instructions for AI coding tools

Rectio is a brand-system kit. Read `README.md` for the layout and `CONTRIBUTING.md` for commit and release rules.

## Where things live
- Brand registry (status, folder paths): `rectio.config.json`. Scripts resolve every path from it — never hard-code a brand folder in a script.
- Brand rules for a specific brand: that brand's docs folder, starting with its `CLAUDE.md` (Rectio: `brand-docs/CLAUDE.md`).
- Websites: `brand-center-*`. Each has its own `CLAUDE.md`/`AGENTS.md` — this Next.js version has breaking changes, read `node_modules/next/dist/docs/` before writing Next.js code.

## Rules
1. Brand values change in `tokens.json` only, then `npm run tokens`. Never edit `*/generated/*` by hand.
2. Never weaken a check to make it pass. Contrast failures are fixed in tokens or recorded in `contrastWaivers` with a reason, and reported to the user.
3. Changes to `brand-center-base` and `brand-center-rectio` shared code must be made in both until they are merged into one app.
4. Run `npm run check:quick` after code changes and `npm run check` before a pull request.
5. Commit messages follow Conventional Commits with a brand or area scope (see `CONTRIBUTING.md`).
6. Don't release, tag, push or deploy unless the user asks.
