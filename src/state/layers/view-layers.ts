import { waitForAll } from 'recoil';

import { makeViewLayersState } from '@/lib/data-map/state/make-view-layers-state';

import { buildingDensityLayerState } from './data-layers/building-density';
import { cddLayersState } from './data-layers/cdd';
import { hazardLayerState } from './data-layers/hazards';
import { hdiGridLayerState } from './data-layers/hdi-grid';
import { healthcareLayersState } from './data-layers/healthcare';
import { humanDevelopmentLayerState } from './data-layers/human-development';
import { industryLayersState } from './data-layers/industry';
import { landCoverLayerState } from './data-layers/land-cover';
import {
  biodiversityIntactnessLayerState,
  forestLandscapeIntegrityLayerState,
} from './data-layers/nature-vulnerability';
import { nbsLayerState, nbsScopeRegionLayerState } from './data-layers/nbs';
import { networkLayersState } from './data-layers/networks';
import { organicCarbonLayerState } from './data-layers/organic-carbon';
import { populationLayerState } from './data-layers/population';
import { populationExposureLayerState } from './data-layers/population-exposure';
import {
  protectedAreasPointLayerState,
  protectedAreasPolygonLayerState,
} from './data-layers/protected-areas';
import { garAalLayerState } from './data-layers/gar-aal';
// UNDRR: GEM Active Faults — line layer with categorical slip-type coloring
import { gemFaultsLayerState } from './data-layers/gem-faults';
import { regionalExposureLayerState } from './data-layers/regional-risk';
// UNDRR: WorldRiskIndex — country-level composite risk scores
import { wriLayerState } from './data-layers/world-risk-index';
// UNDRR: GEM Global Seismic Risk Map — earthquake AAL on hexagonal grid
import { gemRiskLayerState } from './data-layers/gem-risk';
import { rwiLayerState } from './data-layers/rwi';
import { topographyLayersState } from './data-layers/topography';
import { travelTimeLayerState } from './data-layers/travel-time';
import { featureBoundingBoxLayerState } from './ui-layers/feature-bbox';

export const viewLayersState = makeViewLayersState({
  key: 'viewLayersState',
  getViewLayers: ({ get }) => {
    return get(
      waitForAll([
        /**
         * Data layers
         */

        // raster layers that cover all/most of land
        landCoverLayerState,
        populationLayerState,
        buildingDensityLayerState,
        organicCarbonLayerState,
        biodiversityIntactnessLayerState,
        forestLandscapeIntegrityLayerState,
        travelTimeLayerState,
        topographyLayersState,
        cddLayersState,
        hdiGridLayerState,

        // vector layers that cover all/most of land
        humanDevelopmentLayerState,
        regionalExposureLayerState,
        garAalLayerState,
        wriLayerState,
        gemRiskLayerState,

        // vector / raster layers that cover some land
        protectedAreasPolygonLayerState,
        hazardLayerState,
        populationExposureLayerState,
        nbsLayerState,
        rwiLayerState,

        // point/line layers
        gemFaultsLayerState,
        networkLayersState,
        industryLayersState,
        healthcareLayersState,
        protectedAreasPointLayerState,

        /**
         * UI Layers
         */
        nbsScopeRegionLayerState,

        featureBoundingBoxLayerState,
      ]),
    );
  },
});
