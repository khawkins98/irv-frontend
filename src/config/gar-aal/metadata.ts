// UNDRR: GAR 2015 Multi-Hazard AAL dataset metadata
// Field names from the GAR 2015 shapefile (HDX). Shapefile 10-char limit
// causes truncation on some fields (e.g. WDSS_AAL_R instead of WDSS_AAL_REL).

import { ValueLabel } from '@/lib/controls/params/value-label';

export const GAR_AAL_VARIABLES = [
  'AAL',
  'EQ_AAL',
  'FL_AAL',
  'WD_AAL',
  'TS_AAL',
  'SS_AAL',
] as const;

export type GarAalVariableType = (typeof GAR_AAL_VARIABLES)[number];

export const GAR_AAL_VARIABLE_LABELS: ValueLabel<GarAalVariableType>[] = [
  { value: 'AAL', label: 'Total Multi-Hazard AAL (USD)' },
  { value: 'EQ_AAL', label: 'Earthquake AAL (USD)' },
  { value: 'FL_AAL', label: 'River Flood AAL (USD)' },
  { value: 'WD_AAL', label: 'Tropical Cyclone Wind AAL (USD)' },
  { value: 'TS_AAL', label: 'Tsunami AAL (USD)' },
  { value: 'SS_AAL', label: 'Storm Surge AAL (USD)' },
];
