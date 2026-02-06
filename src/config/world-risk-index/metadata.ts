// UNDRR: WorldRiskIndex dataset metadata
// Field names from the WorldRiskIndex GeoPackage (HDX).
// Verified via ogrinfo: ISO, Name_EN, W, E, V, S, C, A (single-letter codes)
// Country ID field: ISO (3-letter code), display name: Name_EN

import { ValueLabel } from '@/lib/controls/params/value-label';

export const WRI_VARIABLES = [
  'W',
  'E',
  'V',
  'S',
  'C',
  'A',
] as const;

export type WriVariableType = (typeof WRI_VARIABLES)[number];

export const WRI_VARIABLE_LABELS: ValueLabel<WriVariableType>[] = [
  { value: 'W', label: 'WorldRiskIndex (Composite)' },
  { value: 'E', label: 'Exposure' },
  { value: 'V', label: 'Vulnerability' },
  { value: 'S', label: 'Susceptibility' },
  { value: 'C', label: 'Lack of Coping Capacity' },
  { value: 'A', label: 'Lack of Adaptive Capacity' },
];
