// UNDRR: GAR 2015 AAL layer state — follows regional-risk.ts pattern
import { selector } from 'recoil';

import { ViewLayer } from '@/lib/data-map/view-layers';

import { garAalLayer } from '@/config/gar-aal/gar-aal-layer';
import { sidebarPathVisibilityState } from '@/sidebar/SidebarContent';
import { garAalVariableState } from '@/state/data-selection/gar-aal';

export const garAalLayerState = selector<ViewLayer>({
  key: 'garAalLayerState',
  get: ({ get }) =>
    get(sidebarPathVisibilityState('risk/gar-aal')) &&
    garAalLayer(get(garAalVariableState)),
});
