# Agent Notes — Nechalim Students Landing Page

Hebrew RTL SvelteKit landing page for international student insurance (נחלים).

## Docs

| File | Purpose |
|------|---------|
| [`docs/page-index.md`](docs/page-index.md) | **Section index** — use this when you need to locate a part of the page, find which component owns a section, check anchor IDs, or understand page order without reading every file |
| [`docs/design-system.md`](docs/design-system.md) | Colors, typography, spacing, and component styling tokens |

When working on a specific section, start with `docs/page-index.md` to jump to the right component. Update that index if you add, remove, or reorder sections, or add new anchor IDs.

## Stack

- SvelteKit + TypeScript
- pnpm
- Lucide icons (`@lucide/svelte`)

## Conventions

- Page sections live in `src/lib/components/` and are composed in `src/routes/+page.svelte`
- Match existing component patterns (kicker, `section-title`, `use:reveal`, RTL layout)
- Do not run `pnpm check` or `svelte check` unless explicitly asked
