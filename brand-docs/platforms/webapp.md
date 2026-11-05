# Platform · Web app (product / dashboard)

Stack: Next.js or Vite + React, Tailwind v4, shadcn/ui (re-themed) or a custom component library.

## Tokens → code
Same CSS variables as the website, plus a `[data-theme="dark"]` block with the dark column from `03-color.md`. Consider Radix Colors-style 12-step scales generated from Pampas for UI states.

## Layout
- App shell: left sidebar 240 px (collapsible to 64 px icon rail) + 56 px top bar + content area.
- Content max-width 1280 for forms/reading; tables and boards go full-width.
- Denser than the website: base spacing `space-4`, card padding `space-6`, row height 48–56.
- Page title `heading-1` at 32 px (not 40); display sizes are **not** used in the app.

## Components
- Follow `08-components.md`. Add app-specific: data table, filters, command palette (⌘K), inline editing, status badges.
- Status badges use functional colours (`success`/`warning`/`danger`) — never brand Pampas for status.
- Primary button: one per view/form. Destructive actions confirm via modal.

## Navigation
- Sidebar items: 24 px icon + `label`. Active = Pampas 700 text + `bg/surface-tint` pill.
- Breadcrumbs in top bar for depth > 1.
- Keyboard: `⌘K` palette, `/` focuses search, `Esc` closes overlays.

## Data visualisation
- Use the waterfall sequence (Pampas 950 → 700 → 500 → 300 → 100).
- Grid lines `border/default`, labels `caption` in `text/secondary`.

## Empty, loading, error
- Skeletons (Pampas 100 shimmer) for loads > 300 ms.
- Empty states per `08`. Errors inline + toast; never a bare alert().

## Dark mode
Required; follows OS by default, user-overridable. Test contrast table for both.
