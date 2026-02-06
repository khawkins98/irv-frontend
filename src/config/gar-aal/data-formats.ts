// UNDRR: GAR 2015 AAL data formats — follows regional-risk/data-formats.ts pattern
import { FormatConfig } from '@/lib/data-map/view-layers';
import { makeValueFormat, nullFormat } from '@/lib/formats';
import { toLabelLookup } from '@/lib/helpers';

import { GAR_AAL_VARIABLE_LABELS } from './metadata';

const garAalLabelLookup = toLabelLookup(GAR_AAL_VARIABLE_LABELS);

export function getGarAalDataFormats(): FormatConfig {
  return {
    getDataLabel: ({ field }) => garAalLabelLookup[field],
    getValueFormatted: nullFormat(
      makeValueFormat((x) => `$${x}`, { maximumFractionDigits: 0 }),
    ),
  };
}
