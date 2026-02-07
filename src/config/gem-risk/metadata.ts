// UNDRR: GEM Global Seismic Risk Map dataset metadata
// Hexagonal grid (~30 km) with Average Annual Loss metrics for earthquake risk.
// Field names are placeholders — verify with ogrinfo after downloading GEM data.
// TODO: verify field names from actual GEM data download

import { ValueLabel } from '@/lib/controls/params/value-label';

export const GEM_RISK_VARIABLES = [
  'aal_economic',
  'aal_builtup',
  'aal_fatalities',
  'aal_homeless',
] as const;

export type GemRiskVariableType = (typeof GEM_RISK_VARIABLES)[number];

export const GEM_RISK_VARIABLE_LABELS: ValueLabel<GemRiskVariableType>[] = [
  { value: 'aal_economic', label: 'Economic Loss AAL (USD)' },
  { value: 'aal_builtup', label: 'Built-up Area AAL (USD)' },
  { value: 'aal_fatalities', label: 'Fatalities AAL (count)' },
  { value: 'aal_homeless', label: 'Displaced/Homeless AAL (count)' },
];
