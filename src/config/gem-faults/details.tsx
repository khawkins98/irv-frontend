// UNDRR: GEM Active Faults details panel — follows gar-aal/details.tsx pattern
import List from '@mui/material/List';
import { FC } from 'react';

import { DataItem } from '@/lib/ui/data-display/DataItem';

import {
  DetailHeader,
  DetailsComponentProps,
  IdSubheader,
} from '@/details/features/detail-components';

export const GemFaultDetails: FC<DetailsComponentProps> = ({ f }) => {
  const name = f.name || f.fz_name || 'Unnamed Fault';

  return (
    <>
      <DetailHeader>{name}</DetailHeader>
      <IdSubheader id={f.catalog_id} />
      <List>
        <DataItem label="Slip Type" value={f.slip_type} />
        <DataItem label="Dip" value={f.dip} />
        <DataItem label="Dip Direction" value={f.dip_dir} />
        <DataItem label="Strike-Slip Rate (mm/yr)" value={f.strike_slip_rate} maximumSignificantDigits={2} />
        <DataItem label="Dip-Slip Rate (mm/yr)" value={f.dip_slip_rate} maximumSignificantDigits={2} />
        <DataItem label="Vert Slip Rate (mm/yr)" value={f.vert_slip_rate} maximumSignificantDigits={2} />
        <DataItem label="Net Slip Rate (mm/yr)" value={f.net_slip_rate} maximumSignificantDigits={2} />
        <DataItem label="Activity Confidence" value={f.activity_confidence} />
        <DataItem label="Last Movement" value={f.last_movement} />
        <DataItem label="Reference" value={f.reference} />
      </List>
    </>
  );
};
