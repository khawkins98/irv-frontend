// UNDRR: GEM Global Seismic Risk Map sidebar section
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import { useRecoilState } from 'recoil';

import { ParamDropdown } from '@/lib/controls/ParamDropdown';

import { GEM_RISK_VARIABLE_LABELS, GemRiskVariableType } from '@/config/gem-risk/metadata';
import { gemRiskVariableState } from '@/state/data-selection/gem-risk';

import { DataNotice, DataNoticeTextBlock } from '../../ui/DataNotice';
import { InputSection } from '../../ui/InputSection';

// UNDRR: Set to true once GEM data has been downloaded and loaded via load-gem-risk-data.sh
const GEM_RISK_DATA_LOADED = false;

export const GemRiskSection = () => {
  const [gemVariable, setGemVariable] = useRecoilState(gemRiskVariableState);

  return (
    <>
      {!GEM_RISK_DATA_LOADED && (
        <Alert severity="info" sx={{ mx: 0, my: 1 }}>
          Data not yet available. The GEM Global Seismic Risk Map requires a{' '}
          <Link
            href="https://www.globalquakemodel.org/products/global-seismic-risk-map"
            target="_blank"
            rel="noopener noreferrer"
          >
            license agreement
          </Link>{' '}
          from the GEM Foundation (free for non-commercial use). Data will be displayed once the
          license is obtained and the dataset is loaded.
        </Alert>
      )}
      <InputSection>
        <ParamDropdown<GemRiskVariableType>
          title="Risk metric:"
          value={gemVariable}
          onChange={setGemVariable}
          options={GEM_RISK_VARIABLE_LABELS}
        />
      </InputSection>
      <DataNotice>
        <DataNoticeTextBlock>
          Global earthquake risk on a ~30 km hexagonal grid, from the GEM Foundation Global Seismic
          Risk Map. Shows Average Annual Loss for built-up area, economic losses, fatalities, and
          displaced population. Data: GEM Foundation, CC BY-SA 4.0.
        </DataNoticeTextBlock>
      </DataNotice>
    </>
  );
};
