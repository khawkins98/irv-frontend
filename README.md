# UNDRR Risk Information Platform — Frontend

UNDRR-branded fork of [nismod/irv-frontend](https://github.com/nismod/irv-frontend). Branding changes are on the [`feat/undrr-branding`](https://github.com/khawkins98/irv-frontend/tree/feat/undrr-branding) branch.

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
