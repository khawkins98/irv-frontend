// UNDRR: GEM Active Faults layer state — no variable dropdown (single categorical layer)
import { selector } from 'recoil';

import { ViewLayer } from '@/lib/data-map/view-layers';

import { gemFaultsLayer } from '@/config/gem-faults/gem-faults-layer';
import { sidebarPathVisibilityState } from '@/sidebar/SidebarContent';

export const gemFaultsLayerState = selector<ViewLayer>({
  key: 'gemFaultsLayerState',
  get: ({ get }) =>
    get(sidebarPathVisibilityState('hazards/active-faults')) &&
    gemFaultsLayer(),
});
