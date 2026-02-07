// UNDRR: GEM Global Seismic Risk Map variable selection atom
import { atom } from 'recoil';

import { GemRiskVariableType } from '@/config/gem-risk/metadata';

export const gemRiskVariableState = atom<GemRiskVariableType>({
  key: 'gemRiskVariableState',
  default: 'aal_economic',
});
