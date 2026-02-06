import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import _ from 'lodash';
import { FC, ReactElement } from 'react';
import { atomFamily, useRecoilValue } from 'recoil';

import { makeHierarchicalVisibilityState } from '@/lib/data-selection/make-hierarchical-visibility-state';
import { Layer } from '@/lib/data-selection/sidebar/Layer';
import { SidebarRoot } from '@/lib/data-selection/sidebar/root';
import { Section } from '@/lib/data-selection/sidebar/Section';
import { StateEffectRootAsync } from '@/lib/recoil/state-effects/StateEffectRoot';
import { RecoilStateFamily } from '@/lib/recoil/types';

import { viewState, ViewType } from '@/state/view';

import {
  EarthquakeControl,
  // UNDRR: Uncomment imports below as datasets are loaded via ETL:
  // CoastalControl, CycloneControl, DroughtControl, ExtremeHeatControl,
  FluvialControl, LandslideControl,
} from './sections/hazards/HazardsControl';
// UNDRR: Uncomment exposure imports as datasets are loaded:
// import { BuildingDensityControl } from './sections/buildings/BuildingDensityControl';
// import { IndustryControl } from './sections/industry/IndustryControl';
// import { NetworkControl } from './sections/networks/NetworkControl';
// UNDRR: Uncomment risk/AAL imports when AAL/PML data is loaded:
// import { InfrastructureRiskSection } from './sections/risk/infrastructure-risk';
// import { PopulationExposureSection } from './sections/risk/population-exposure';
// import { RegionalRiskSection } from './sections/risk/regional-risk';
// import { EnforceSingleChildVisible } from '@/lib/data-selection/sidebar/single-child';
import { DataNotice, DataNoticeTextBlock } from './ui/DataNotice';
import { defaultSectionVisibilitySyncEffect, SidebarUrlStateSyncRoot } from './url-state';

// UNDRR: Vulnerability kept to avoid runtime errors on URL navigation.
// Adaptation removed — out of scope for AAL/PML focus.
const viewLabels = {
  hazard: 'Hazard',
  exposure: 'Exposure',
  vulnerability: 'Vulnerability',
  risk: 'Risk',
};

export const sidebarVisibilityToggleState = atomFamily({
  key: 'sidebarVisibilityToggleState',
  effects: (path: string) => [defaultSectionVisibilitySyncEffect(path)],
});

export const sidebarExpandedState = atomFamily({
  key: 'sidebarExpandedState',
  default: sidebarVisibilityToggleState,
});

export const sidebarPathChildrenState = atomFamily<string[], string>({
  key: 'sidebarPathChildrenState',
  default: () => [],
});

export const sidebarPathChildrenLoadingState = atomFamily<boolean, string>({
  key: 'sidebarPathChildrenLoadingState',
  default: true,
});

export const sidebarPathVisibilityState: RecoilStateFamily<boolean, string> =
  makeHierarchicalVisibilityState(sidebarVisibilityToggleState);

const HazardsSection = () => (
  <Section path="hazards" title="Hazards">
    <Layer path="earthquake" title="Earthquakes">
      <EarthquakeControl />
    </Layer>
    <Layer path="fluvial" title="River Flooding">
      <FluvialControl />
    </Layer>
    <Layer path="landslide" title="Landslide">
      <LandslideControl />
    </Layer>
    {/* UNDRR: Layers below are commented out because their raster data has not
        been loaded via the ETL pipeline. Uncomment and restore imports as
        datasets are added. See map-demo/docs/data-loading.md for instructions.
    <Layer path="coastal" title="Coastal Flooding (Aqueduct)">
      <CoastalControl />
    </Layer>
    <Layer path="cyclone" title="Tropical Cyclones">
      <CycloneControl />
    </Layer>
    <Layer path="cdd" title="Cooling degree days">
      <CDDControl />
    </Layer>
    <Layer path="extreme_heat" title="Extreme Heat">
      <ExtremeHeatControl />
    </Layer>
    <Layer path="drought" title="Droughts">
      <DroughtControl />
    </Layer>
    <Layer path="wildfire" title="Wildfires" disabled />
    */}
  </Section>
);

const ExposureSection = () => (
  <Section path="exposure" title="Exposure">
    <Layer path="population" title="Population">
      <DataNotice>
        <DataNoticeTextBlock>
          Map shows population density in 2020, from the JRC Global Human Settlement Layer (2022).
        </DataNoticeTextBlock>
      </DataNotice>
    </Layer>
    {/* UNDRR: Layers below are commented out because their data has not been
        loaded. These are relevant to loss models — uncomment and restore imports
        as datasets are added. See map-demo/docs/data-loading.md for instructions.
    <Layer path="buildings" title="Buildings">
      <BuildingDensityControl />
    </Layer>
    <Layer path="infrastructure" title="Infrastructure">
      <NetworkControl />
    </Layer>
    <Layer path="industry" title="Industry">
      <IndustryControl />
    </Layer>
    */}
  </Section>
);

/* UNDRR: RiskSection is the AAL/PML display (EAD/EAEL). Uncomment when AAL/PML
   data is loaded. Restore imports for EnforceSingleChildVisible,
   PopulationExposureSection, InfrastructureRiskSection, RegionalRiskSection,
   and uncomment the corresponding nav item in Nav.tsx.
   See map-demo/docs/data-loading.md for instructions.
const RiskSection = () => (
  <Section path="risk" title="Risk">
    <EnforceSingleChildVisible />
    <Layer path="population" title="Population Exposure" unmountOnHide={true}>
      <PopulationExposureSection />
    </Layer>
    <Layer path="infrastructure" title="Infrastructure Risk" unmountOnHide={true}>
      <InfrastructureRiskSection />
    </Layer>
    <Layer path="regional" title="Regional Summary" unmountOnHide={true}>
      <RegionalRiskSection />
    </Layer>
  </Section>
);
*/

// UNDRR: Removed 'adaptation' — out of scope for AAL/PML focus
const TOP_LEVEL_SECTIONS = ['hazards', 'exposure', 'vulnerability', 'risk'];

const VIEW_TRANSITIONS: Record<ViewType, any> = {
  hazard: {
    enter: {
      showPaths: ['hazards'],
      hideRest: true,
    },
    exit: {
      hidePaths: ['hazards'],
    },
  },
  exposure: {
    enter: {
      showPaths: ['exposure'],
      hideRest: true,
    },
    exit: {
      hidePaths: ['exposure'],
    },
  },
  vulnerability: {
    enter: {
      showPaths: ['vulnerability', 'vulnerability/human', 'vulnerability/nature'],
      hideRest: true,
    },
    exit: {
      hidePaths: ['vulnerability'],
    },
  },
  risk: {
    enter: {
      showPaths: ['risk'],
      hideRest: true,
    },
    exit: {
      hidePaths: ['risk'],
    },
  },
  // UNDRR: Removed adaptation — out of scope for AAL/PML focus
};

const viewTransitionEffect = ({ set }, newView, previousView) => {
  if (newView === previousView) return;

  const { showPaths = [], hideRest = false } = VIEW_TRANSITIONS[newView].enter;

  for (const path of showPaths) {
    set(sidebarExpandedState(path), true);
    set(sidebarVisibilityToggleState(path), true);
  }

  // hide other sections, but only if we're transitioning from a previous view
  if (previousView != null && hideRest) {
    const hidePaths = _.difference(TOP_LEVEL_SECTIONS, showPaths);

    for (const path of hidePaths) {
      set(sidebarExpandedState(path), false);
      set(sidebarVisibilityToggleState(path), false);
    }
  }
};

export const SidebarContent: FC<{}> = () => {
  const view = useRecoilValue(viewState);

  const knownViews = Object.keys(viewLabels);
  if (!knownViews.includes(view)) {
    return <Alert severity="error">Unknown view!</Alert>;
  }

  // UNDRR: Removed adaptation — out of scope for AAL/PML focus
  const sections: Record<ViewType, ReactElement> = {
    hazard: <HazardsSection key="hazard" />,
    exposure: <ExposureSection key="exposure" />,
    vulnerability: null,
    risk: null,
  };

  return (
    <SidebarRoot
      visibilityState={sidebarVisibilityToggleState}
      hierarchicalVisibilityState={sidebarPathVisibilityState}
      expandedState={sidebarExpandedState}
      pathChildrenState={sidebarPathChildrenState}
      pathChildrenLoadingState={sidebarPathChildrenLoadingState}
    >
      <SidebarUrlStateSyncRoot />
      <StateEffectRootAsync state={viewState} effect={viewTransitionEffect} hookType="effect" />
      <Stack
        sx={{
          '& > :first-of-type': {
            marginBottom: 2,
          },
        }}
      >
        {sections[view]}

        {_.map(sections, (sectionElement, sectionView) => sectionView !== view && sectionElement)}
      </Stack>
    </SidebarRoot>
  );
};
