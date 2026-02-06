import { selector, selectorFamily } from 'recoil';

import { apiClient } from '@/api-client';

export const rasterAllSourcesQuery = selector({
  key: 'rasterAllSourcesQuery',
  get: async () => {
    return await apiClient.tiles.tilesGetAllTileSourceMeta();
  },
});

export const rasterSourceByDomainQuery = selectorFamily({
  key: 'rasterSourceByDomainQuery',
  get:
    (domain: string) =>
    ({ get }) => {
      const sources = get(rasterAllSourcesQuery);

      const sourcesWithDomain = sources.filter((x) => x.domain === domain);

      if (sourcesWithDomain.length > 1) {
        throw new Error(`More than one raster source with domain: ${domain}`);
      }
      // UNDRR: Return null instead of throwing when a domain has no data loaded.
      // Upstream throws here, but we run with a subset of datasets and need
      // the app to degrade gracefully when raster sources are missing.
      if (sourcesWithDomain.length === 0) {
        return null;
      }

      return sourcesWithDomain[0];
    },
});

export const rasterSourceDomainsQuery = selectorFamily({
  key: 'rasterSourceDomainsQuery',
  get:
    (domain: string) =>
    async ({ get }) => {
      const source = get(rasterSourceByDomainQuery(domain));

      // UNDRR: Gracefully return empty domains when a raster source is not loaded,
      // rather than attempting an API call that would fail.
      if (source == null) {
        return [];
      }

      const { domains } = await apiClient.tiles.tilesGetTileSourceDomains({ sourceId: source.id });

      return domains;
    },
});
