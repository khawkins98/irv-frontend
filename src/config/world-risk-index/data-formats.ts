// UNDRR: WorldRiskIndex data formats — follows gar-aal/data-formats.ts pattern
import { FormatConfig } from '@/lib/data-map/view-layers';
import { makeValueFormat, nullFormat } from '@/lib/formats';
import { toLabelLookup } from '@/lib/helpers';

import { WRI_VARIABLE_LABELS } from './metadata';

const wriLabelLookup = toLabelLookup(WRI_VARIABLE_LABELS);

export function getWriDataFormats(): FormatConfig {
  return {
    getDataLabel: ({ field }) => wriLabelLookup[field],
    getValueFormatted: nullFormat(
      makeValueFormat((x) => x, { maximumFractionDigits: 1 }),
    ),
  };
}
