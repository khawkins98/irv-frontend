import { string } from '@recoiljs/refine';
import { atom } from 'recoil';
import { syncEffect } from 'recoil-sync';

// UNDRR: Removed 'adaptation' — out of scope for AAL/PML focus
export type ViewType = 'hazard' | 'exposure' | 'vulnerability' | 'risk';

export const viewState = atom<ViewType>({
  key: 'viewState',
  effects: [
    syncEffect({
      storeKey: 'map-view-route',
      itemKey: 'view',
      refine: string(),
    }),
  ],
});
