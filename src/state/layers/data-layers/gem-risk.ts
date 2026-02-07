// UNDRR: GEM Global Seismic Risk Map layer state
import { selector } from 'recoil';

import { ViewLayer } from '@/lib/data-map/view-layers';

import { gemRiskLayer } from '@/config/gem-risk/gem-risk-layer';
import { sidebarPathVisibilityState } from '@/sidebar/SidebarContent';
import { gemRiskVariableState } from '@/state/data-selection/gem-risk';

export const gemRiskLayerState = selector<ViewLayer>({
  key: 'gemRiskLayerState',
  get: ({ get }) =>
    get(sidebarPathVisibilityState('risk/gem-risk')) &&
    gemRiskLayer(get(gemRiskVariableState)),
});
