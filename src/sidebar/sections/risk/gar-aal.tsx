// UNDRR: GAR 2015 AAL sidebar section — follows regional-risk.tsx pattern
import { useRecoilState } from 'recoil';

import { ParamDropdown } from '@/lib/controls/ParamDropdown';

import { GAR_AAL_VARIABLE_LABELS, GarAalVariableType } from '@/config/gar-aal/metadata';
import { garAalVariableState } from '@/state/data-selection/gar-aal';

import { DataNotice, DataNoticeTextBlock } from '../../ui/DataNotice';
import { InputSection } from '../../ui/InputSection';

export const GarAalSection = () => {
  const [garVariable, setGarVariable] = useRecoilState(garAalVariableState);

  return (
    <>
      <InputSection>
        <ParamDropdown<GarAalVariableType>
          title="Hazard AAL:"
          value={garVariable}
          onChange={setGarVariable}
          options={GAR_AAL_VARIABLE_LABELS}
        />
      </InputSection>
      <DataNotice>
        <DataNoticeTextBlock>
          Country-level Average Annual Loss from the GAR 2015 Risk Atlas (UNDRR). Covers 5 hazards:
          Earthquake, River Flood, Tropical Cyclone Wind, Tsunami, and Storm Surge. Values in USD.
        </DataNoticeTextBlock>
      </DataNotice>
    </>
  );
};
