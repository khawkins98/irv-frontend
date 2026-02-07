// UNDRR: GAR 2015 AAL details panel — follows regional-risk/details.tsx pattern
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { DataItem } from '@/lib/ui/data-display/DataItem';

import {
  DetailHeader,
  DetailsComponentProps,
  IdSubheader,
} from '@/details/features/detail-components';

import { GAR_AAL_VARIABLE_LABELS } from './metadata';

export const GarAalDetails: FC<DetailsComponentProps> = ({ f }) => {
  return (
    <>
      <DetailHeader>{f.TERR_NAME}</DetailHeader>
      <IdSubheader id={f.ISO3_CODE} />
      <List>
        <Typography variant="subtitle2">Average Annual Loss by hazard:</Typography>
        {GAR_AAL_VARIABLE_LABELS.map(({ value, label }) => (
          <DataItem key={value} label={label} value={f[value]} maximumSignificantDigits={3} />
        ))}
        <DataItem label="Capital Stock (USD)" value={f.TOT_STOCK} maximumSignificantDigits={3} />
      </List>
    </>
  );
};
