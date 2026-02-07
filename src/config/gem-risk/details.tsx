// UNDRR: GEM Global Seismic Risk Map details panel
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { DataItem } from '@/lib/ui/data-display/DataItem';

import {
  DetailHeader,
  DetailsComponentProps,
} from '@/details/features/detail-components';

import { GEM_RISK_VARIABLE_LABELS } from './metadata';

// TODO: verify field names from actual GEM data download
export const GemRiskDetails: FC<DetailsComponentProps> = ({ f }) => {
  return (
    <>
      <DetailHeader>GEM Seismic Risk</DetailHeader>
      <List>
        <Typography variant="subtitle2">Average Annual Loss (earthquake):</Typography>
        {GEM_RISK_VARIABLE_LABELS.map(({ value, label }) => (
          <DataItem key={value} label={label} value={f[value]} maximumSignificantDigits={3} />
        ))}
      </List>
    </>
  );
};
