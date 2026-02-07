// UNDRR: WorldRiskIndex details panel — follows gar-aal/details.tsx pattern
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { DataItem } from '@/lib/ui/data-display/DataItem';

import {
  DetailHeader,
  DetailsComponentProps,
  IdSubheader,
} from '@/details/features/detail-components';

import { WRI_VARIABLE_LABELS } from './metadata';

export const WriDetails: FC<DetailsComponentProps> = ({ f }) => {
  return (
    <>
      <DetailHeader>{f.Name_EN}</DetailHeader>
      <IdSubheader id={f.ISO} />
      <List>
        <Typography variant="subtitle2">WorldRiskIndex scores (0–100):</Typography>
        {WRI_VARIABLE_LABELS.map(({ value, label }) => (
          <DataItem key={value} label={label} value={f[value]} maximumSignificantDigits={1} />
        ))}
      </List>
    </>
  );
};
