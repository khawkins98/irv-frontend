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
// UNDRR: Uncomment as datasets are loaded:
// import { BuildingDensityControl } from './sections/buildings/BuildingDensityControl';
// import { IndustryControl } from './sections/industry/IndustryControl';
// import { NetworkControl } from './sections/networks/NetworkControl';
// import { CDDControl } from './sections/risk/CDDControl';
// import { InfrastructureRiskSection } from './sections/risk/infrastructure-risk';
// import { PopulationExposureSection } from './sections/risk/population-exposure';
// import { RegionalRiskSection } from './sections/risk/regional-risk';
// import { TopographyControl } from './sections/topography/TopographyControl';
// import { HdiControl } from './sections/vulnerability/HdiControl';
// import { TravelTimeControl } from './sections/vulnerability/TravelTimeControl';
// import { WdpaControls } from './sections/vulnerability/WdpaControl';
// import { NbsAdaptationSection } from './sections/adaptation/NbsAdaptationSection';
// import { EnforceSingleChildVisible } from '@/lib/data-selection/sidebar/single-child';
import { DataNotice, DataNoticeTextBlock } from './ui/DataNotice';
import { defaultSectionVisibilitySyncEffect, SidebarUrlStateSyncRoot } from './url-state';

const viewLabels = {
  hazard: 'Hazard',
  exposure: 'Exposure',
  vulnerability: 'Vulnerability',
  risk: 'Risk',
  adaptation: 'Adaptation Options',
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
        loaded. Uncomment and restore imports as datasets are added.
        See map-demo/docs/data-loading.md for instructions.
    <Layer path="buildings" title="Buildings">
      <BuildingDensityControl />
    </Layer>
    <Layer path="infrastructure" title="Infrastructure">
      <NetworkControl />
    </Layer>
    <Layer path="industry" title="Industry">
      <IndustryControl />
    </Layer>
    <Layer path="healthsites" title="Healthcare" />
    <Layer path="land-cover" title="Land Cover" />
    <Layer path="topography" title="Topography">
      <TopographyControl />
    </Layer>
    <Layer path="organic-carbon" title="Soil Organic Carbon" />
    */}
  </Section>
);

/* UNDRR: Sections below are commented out because their datasets have not been
   loaded via the ETL pipeline. To re-enable, uncomment the section components,
   restore their imports, add them back to the `sections` record in SidebarContent,
   and uncomment the corresponding nav items in Nav.tsx.
   See map-demo/docs/data-loading.md for instructions.
const VulnerabilitySection = () => (
  <Section path="vulnerability" title="Vulnerability">
    <Section path="human" title="People">
      <Layer path="human-development" title="Human Development (Subnational)">
        <HdiControl />
      </Layer>
      <Layer path="hdi-grid" title="Human Development (Grid)" />
      <Layer path="rwi" title="Relative Wealth Index" />
      <Layer path="travel-time" title="Travel Time to Healthcare">
        <TravelTimeControl />
      </Layer>
    </Section>
    <Section path="nature" title="Planet">
      <Layer path="biodiversity-intactness" title="Biodiversity Intactness" />
      <Layer path="forest-integrity" title="Forest Landscape Integrity" />
      <Layer path="protected-areas" title="Protected Areas (WDPA)">
        <WdpaControls />
      </Layer>
    </Section>
  </Section>
);

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

const AdaptationSection = () => (
  <Section path="adaptation" title="Adaptation Options">
    <Layer path="nbs" title="Nature-Based Solutions">
      <NbsAdaptationSection />
    </Layer>
  </Section>
);
*/

const TOP_LEVEL_SECTIONS = ['hazards', 'exposure', 'vulnerability', 'risk', 'adaptation'];

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
  adaptation: {
    enter: {
      showPaths: ['adaptation', 'adaptation/nbs'],
      hideRest: true,
    },
    exit: {
      hidePaths: ['adaptation'],
    },
  },
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

  const sections: Record<ViewType, ReactElement> = {
    hazard: <HazardsSection key="hazard" />,
    exposure: <ExposureSection key="exposure" />,
    vulnerability: null,
    risk: null,
    adaptation: null,
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
