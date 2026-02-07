# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Open Source Heritage — Editorial Guidance

This codebase is built on the Global Resilience Index (GRI) infrastructure risk viewer, developed as open source software by the Oxford Programme for Sustainable Infrastructure Systems (OPSIS) and collaborators at nismod/irv-frontend. UNDRR is leveraging that open source heritage — not replacing it.

**When making changes, preserve the upstream relationship.** Branding, theming and UNDRR-specific configuration are layered on top; the core viewer logic, data model and architecture remain the upstream project's work. Every UNDRR-specific change should be:

- Clearly marked (use `// UNDRR:` comments) so changes can be reconciled with upstream.
- Minimal and additive — prefer configuration over code modification. Do not gut or rewrite upstream modules when a wrapper, theme override or feature flag will do.
- Attribution-preserving — never remove or obscure credit to the original Oxford/OPSIS authors and contributors. If new UI text or About pages are added, they must acknowledge the GRI origins.
- Upstream-friendly — write changes in a way that could be proposed back as PRs to nismod/irv-frontend where appropriate. Avoid hard-coding UNDRR assumptions into generic library code (`src/lib/`).

The goal is a UNDRR-branded product that stays close enough to upstream to benefit from future improvements, and that honours the open collaboration that made this tool possible.

## Project Overview

IRV Frontend (Infrastructure Risk Visualization) is a React-based geospatial web application for visualizing infrastructure risk and climate hazard data. This is a UNDRR-branded fork (exploratory PoC) of [nismod/irv-frontend](https://github.com/nismod/irv-frontend), the open source GRI viewer built by Oxford OPSIS and collaborators. UNDRR leverages this open source foundation to deliver risk information through its own platform. It renders interactive maps with Deck.GL + MapLibre GL, using configuration-driven "view layers" as its central abstraction.

## Commands

```bash
npm run start            # Vite dev server on http://localhost:5173 (HMR)
npm run build            # TypeScript check + Vite production build to /build
npm run serve            # Preview the built output
npm run test             # Vitest in watch mode
npm run coverage         # Vitest with coverage
npm run lint             # Full ESLint with type-aware rules (max-warnings 0)
npm run lint:fast        # Fast ESLint without type rules (used in pre-commit)
npm run format           # Prettier formatting
npm run test:type-check  # Strict TypeScript check (no emit)
```

**NPM registry**: `@nismod` packages require a GitHub NPM token. Set `GH_NPM_AUTH` env var before `npm install` (see `.npmrc`).

## Architecture

### State Management

Recoil atoms/selectors drive the application. The `App.tsx` root wraps everything in:
- `RecoilRoot` → `RecoilLocalStorageSync` (UI prefs) → `RecoilURLSyncJSON` (shareable map state via query params)
- `QueryClientProvider` (TanStack React Query for server state)
- MUI `ThemeProvider`

Key state locations:
- `src/state/view.ts` — active view type (hazard/exposure/vulnerability/risk/adaptation)
- `src/state/data-selection/` — which layers are selected per dataset
- `src/state/data-params.ts` — parameter values with dependency resolution
- `src/state/layers/view-layers.ts` — combined active Deck.GL layers (derived from selection state)
- `src/state/map-view/` — camera position, zoom, synced to URL

### Data Flow

```
URL params → Recoil atoms (via recoil-sync) → Selectors compute layer state
→ MapView renders Deck.GL + MapLibre → Sidebar UI reflects & updates state
→ TanStack Query + @nismod/irv-api-client fetch data from backend
```

### View Layer Abstraction

The central pattern: each dataset is a **ViewLayer** that bundles Deck.GL layer definitions + React UI (legend, tooltip, details). ViewLayer objects are created inside Recoil state (`state/layers/data-layers/`), so they're only recreated when dependencies change. The `fn()` method is called every map update (zoom/pan), so expensive work should happen at creation time, not inside `fn()`.

**To add a new dataset layer** (from `docs/howto.md`):
1. Create config folder: `src/config/{dataset}/`
2. Define a ViewLayer factory function
3. Add selection state in `src/state/data-selection/` and wire into `sidebar/SidebarContent.tsx`
4. Add layer state in `src/state/layers/data-layers/` and register in `state/layers/view-layers.ts`

### Key Directories

- `src/config/` — Dataset/layer definitions (hazards, networks, industry, etc.), basemaps, color maps, interaction groups, source URL builders
- `src/state/` — All Recoil atoms/selectors
- `src/lib/` — Generic reusable utilities (ESLint enforces: no imports from other `src/` folders)
- `src/map/` — Map view components (MapView, BaseMap, layers, tooltips)
- `src/sidebar/` — Layer selection sidebar with per-dataset control sections
- `src/pages/` — Page components (map, intro, about, guide, data sources, terms)
- `src/modules/` — Isolated sub-apps (downloads, metrics)
- `docs/` — Developer architecture guides (howto.md, directions.md, deckgl.md)

### API Clients

- `src/api-client.ts` exports `apiClient` (REST at `/api`) and `autopkgClient` (data extraction at `/extract`)
- Raster tiles: `/api/tiles/{path}/{z}/{x}/{y}.png?colormap={scheme}&stretch_range=[min,max]`
- Vector data: `/vector/data/{datasetId}.json`

## Code Style

- **TypeScript** in non-strict mode, path alias `@/*` → `./src/*`
- **Prettier**: 100 char width, single quotes, trailing commas, sorted imports (built-in → third-party → `@/lib` → `@/` → relative)
- **Components**: PascalCase files, functional components with hooks
- **Hooks**: `use-*.ts` camelCase filenames
- **State/utils**: kebab-case filenames
- **Tests**: colocated `*.spec.ts` files next to source
- **Styling**: Emotion + MUI; theme primary is `#004f91` (UNDRR blue)
- **Pre-commit**: Husky + lint-staged runs `lint:fast --fix` and Prettier on staged files
- ESLint React Hooks `additionalHooks` includes `useRecoilCallback` and `useRecoilTransaction_UNSTABLE`
