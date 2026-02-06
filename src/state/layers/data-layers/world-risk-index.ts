// UNDRR: WorldRiskIndex layer state — follows gar-aal.ts pattern
import { selector } from 'recoil';

import { ViewLayer } from '@/lib/data-map/view-layers';

import { wriLayer } from '@/config/world-risk-index/world-risk-index-layer';
import { sidebarPathVisibilityState } from '@/sidebar/SidebarContent';
import { wriVariableState } from '@/state/data-selection/world-risk-index';

export const wriLayerState = selector<ViewLayer>({
  key: 'wriLayerState',
  get: ({ get }) =>
    get(sidebarPathVisibilityState('risk/world-risk-index')) &&
    wriLayer(get(wriVariableState)),
});
