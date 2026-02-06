// UNDRR: WorldRiskIndex variable selection atom
import { atom } from 'recoil';

import { WriVariableType } from '@/config/world-risk-index/metadata';

export const wriVariableState = atom<WriVariableType>({
  key: 'wriVariableState',
  default: 'W',
});
