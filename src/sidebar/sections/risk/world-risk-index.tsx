// UNDRR: WorldRiskIndex sidebar section — follows gar-aal.tsx pattern
import { useRecoilState } from 'recoil';

import { ParamDropdown } from '@/lib/controls/ParamDropdown';

import { WRI_VARIABLE_LABELS, WriVariableType } from '@/config/world-risk-index/metadata';
import { wriVariableState } from '@/state/data-selection/world-risk-index';

import { DataNotice, DataNoticeTextBlock } from '../../ui/DataNotice';
import { InputSection } from '../../ui/InputSection';

export const WorldRiskIndexSection = () => {
  const [wriVariable, setWriVariable] = useRecoilState(wriVariableState);

  return (
    <>
      <InputSection>
        <ParamDropdown<WriVariableType>
          title="Metric:"
          value={wriVariable}
          onChange={setWriVariable}
          options={WRI_VARIABLE_LABELS}
        />
      </InputSection>
      <DataNotice>
        <DataNoticeTextBlock>
          Country-level composite disaster risk scores from the WorldRiskIndex 2024
          (Bundnis Entwicklung Hilft / IFHV). Covers 193 countries, scored 0–100 across
          exposure, vulnerability, susceptibility, coping, and adaptive capacity dimensions.
          CC BY 4.0.
        </DataNoticeTextBlock>
      </DataNotice>
    </>
  );
};
