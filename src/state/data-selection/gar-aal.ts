// UNDRR: GAR 2015 AAL variable selection atom
import { atom } from 'recoil';

import { GarAalVariableType } from '@/config/gar-aal/metadata';

export const garAalVariableState = atom<GarAalVariableType>({
  key: 'garAalVariableState',
  default: 'AAL',
});
