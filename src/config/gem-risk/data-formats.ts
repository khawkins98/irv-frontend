// UNDRR: GEM Global Seismic Risk Map data formats
import { FormatConfig } from '@/lib/data-map/view-layers';
import { makeValueFormat, nullFormat } from '@/lib/formats';
import { toLabelLookup } from '@/lib/helpers';

import { GEM_RISK_VARIABLE_LABELS, GemRiskVariableType } from './metadata';

const gemRiskLabelLookup = toLabelLookup(GEM_RISK_VARIABLE_LABELS);

// UNDRR: Monetary variables use USD formatting; count variables use plain integers
const MONETARY_VARIABLES: GemRiskVariableType[] = ['aal_economic', 'aal_builtup'];

export function getGemRiskDataFormats(variable: GemRiskVariableType): FormatConfig {
  const isMoney = MONETARY_VARIABLES.includes(variable);

  return {
    getDataLabel: ({ field }) => gemRiskLabelLookup[field],
    getValueFormatted: nullFormat(
      isMoney
        ? makeValueFormat((x) => `$${x}`, { maximumFractionDigits: 0 })
        : makeValueFormat((x) => x, { maximumFractionDigits: 0 }),
    ),
  };
}
