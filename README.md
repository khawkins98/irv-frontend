# UNDRR Risk Information Platform — Frontend

**Exploratory proof of concept.** UNDRR-branded fork of [nismod/irv-frontend](https://github.com/nismod/irv-frontend) investigating how the GRI Risk Viewer can be rebranded for UNDRR use. Branding changes are on the [`feat/undrr-branding`](https://github.com/khawkins98/irv-frontend/tree/feat/undrr-branding) branch. Orchestration lives in [map-demo](https://github.com/khawkins98/map-demo).

## UNDRR Changes from Upstream

All UNDRR-specific changes are marked with `// UNDRR:` comments for future upstream reconciliation.

| File | What changed |
|------|-------------|
| `src/sidebar/SidebarContent.tsx` | Only Earthquakes and Population layers active; all others commented out |
| `src/Nav.tsx` | Vulnerability/Risk/Adaptation nav tabs hidden; UNDRR logo and brand colors |
| `src/state/data-domains/sources.ts` | Returns `null` instead of throwing when a raster domain has no data |
| `src/state/data-domains/hazards.ts` | Returns minimal defaults when no raster data is loaded for a hazard |
| `src/map/use-basemap-style.ts` | Guards against race condition with base map label layers |
| `src/theme.ts` | UNDRR colors, Roboto fonts |
| `src/pages/IntroPage.tsx` | UNDRR landing page content |
| `src/pages/PageFooter.tsx` | UNDRR branding and links |
| `src/pages/AboutPage.tsx` | UNDRR attribution |
| `index.html` | Page title, UNDRR analytics script |

To re-enable commented-out layers as datasets are loaded, see the [data loading guide](https://github.com/khawkins98/map-demo/blob/main/docs/data-loading.md) in the map-demo repo.

## Set up Husky

When running `npm install` in development, the `prepare` script should be run
automatically. This will set up the Husky git hooks. The `pre-commit` hook is
used to run linting and formatting on staged files using `lint-staged`.

## Install dependencies for development

This package's dependencies include packages in the `@nismod` scope, which are
published through the GitHub npm package repository.

These packages are publicly available, but require a GitHub Personal Access
Token to install.

In order to install the project's dependencies:

If you have the [GitHub CLI](https://cli.github.com/) installed:

```bash
# Add read:packages scope (one-time)
gh auth refresh -h github.com -s read:packages

# Set the token for npm
export GH_NPM_AUTH=$(gh auth token)
npm ci
```

Alternatively, create a [GitHub Personal Access Token
(classic)](https://github.com/settings/tokens/new) with the `read:packages`
permission and add it to `~/.npmrc`:

```
@nismod:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKENHERE
```

## Containers

See `./containers` for Docker configuration.

The Dockerfiles use a [Docker BuildKit secret](https://docs.docker.com/build/buildkit/)
named `GH_TOKEN` to authenticate with the GitHub npm registry during build.

**Build the production image:**

```bash
GH_TOKEN=$(gh auth token) docker build \
  --secret id=GH_TOKEN,env=GH_TOKEN \
  -f containers/Dockerfile-prod \
  -t ghcr.io/khawkins98/irv-frontend:0.1.0-undrr .
```

**Build the dev image:**

```bash
GH_TOKEN=$(gh auth token) docker build \
  --secret id=GH_TOKEN,env=GH_TOKEN \
  -f containers/Dockerfile-dev \
  -t ghcr.io/khawkins98/irv-frontend:dev .
```

**Run the dev container:**

```bash
docker run -it -p 5173:5173 -v $(pwd)/src:/app/src ghcr.io/khawkins98/irv-frontend:dev
```

Then visit http://localhost:5173

## Release an update

Create a GitHub Release on this fork to trigger the CI workflow, which builds and pushes to GHCR:

1. Test changes locally (`npm test`, and manual check)
2. Push/merge to `feat/undrr-branding`
3. [Draft a new release](https://github.com/khawkins98/irv-frontend/releases) with a new tag (e.g. `0.1.0-undrr`)
4. Wait for [Actions](https://github.com/khawkins98/irv-frontend/actions) to complete
5. Update `FRONTEND_IMAGE` in `map-demo/.env` or `docker-compose.yaml` if the tag changed

**Manual push to GHCR:**

```bash
echo $(gh auth token) | docker login ghcr.io -u khawkins98 --password-stdin
docker push ghcr.io/khawkins98/irv-frontend:0.1.0-undrr
```

See [map-demo](https://github.com/khawkins98/map-demo) for the orchestration setup.

## Development

Developer-focussed documentation on the app and potential roadmap:

- [HOWTO](./docs/howto.md) - simple overview of the app structure, main
  concepts and some pointers on how to add new things
- [directions](./docs/directions.md) - detailed overview of the current folder
  hierarchy, and a list of refactoring directions and additions that could be
  made in the future
- [Deck.gl](./docs/deckgl.md) - some rationale and descriptions of the ways in
  which the app extends vanilla deck.gl behavior, especially the prop merging
- [comments](./docs/code-thoughts.md) - comments on what could be improved in
  individual files, if time and resource allow

## License

This codebase is made available under the MIT License, copyright (c) 2023 Tom
Russell, Maciej Ziarkowski and contributors. See [./LICENSE](./LICENSE) for
details

## Acknowledgments

See https://github.com/nismod/infra-risk-vis/#acknowledgements
