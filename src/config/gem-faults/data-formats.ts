// UNDRR: GEM Active Faults data formats — follows gar-aal/data-formats.ts pattern
import { FormatConfig } from '@/lib/data-map/view-layers';
import { nullFormat } from '@/lib/formats';

export function getGemFaultsDataFormats(): FormatConfig {
  return {
    getDataLabel: () => 'Active Fault',
    getValueFormatted: nullFormat((x) => String(x)),
  };
}
