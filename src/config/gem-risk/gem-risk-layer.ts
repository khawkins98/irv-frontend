// UNDRR: GEM Global Seismic Risk Map layer — hexagonal grid with earthquake AAL
import React from 'react';

import { colorMap } from '@/lib/color-map';
import { d3 } from '@/lib/d3';
import { InteractionTarget, VectorTarget } from '@/lib/data-map/interactions/types';
import { VectorHoverDescription } from '@/lib/data-map/tooltip/VectorHoverDescription';
import { ColorSpec, FieldSpec, ViewLayer } from '@/lib/data-map/view-layers';
import { basicMvtLayer } from '@/lib/deck/layers/basic-mvt-layer';
import { makeDataColorAccessor } from '@/lib/deck/props/data-color';
import { featureProperty } from '@/lib/deck/props/data-source';
import { mvtSelection } from '@/lib/deck/props/mvt-selection';
import { border, fillColor } from '@/lib/deck/props/style';
import { getFeatureId } from '@/lib/deck/utils/get-feature-id';

import { SimpleAssetDetails } from '@/details/features/asset-details';

import { getGemRiskDataFormats } from './data-formats';
import { GemRiskDetails } from './details';
import { GemRiskVariableType } from './metadata';

// UNDRR: Log scale for monetary AAL values (orders of magnitude range).
// Linear scale for count-based metrics (fatalities, homeless).
const MONETARY_VARIABLES: GemRiskVariableType[] = ['aal_economic', 'aal_builtup'];

const gemRiskColorLookup: Record<GemRiskVariableType, ColorSpec> = {
  aal_economic: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolateOranges,
    range: [1, 10_000_000_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  aal_builtup: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolateYlOrBr,
    range: [1, 10_000_000_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  aal_fatalities: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolateReds,
    range: [0.001, 10_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  aal_homeless: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolatePurples,
    range: [0.01, 1_000_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
};

export function gemRiskLayer(variable: GemRiskVariableType): ViewLayer {
  const fieldSpec: FieldSpec = {
    fieldGroup: 'properties',
    field: variable,
  };

  const colorSpec = gemRiskColorLookup[variable];

  const id = 'gem_risk';
  // TODO: verify unique ID property from actual GEM data
  const uniqueIdProperty = 'id';

  return {
    id,
    interactionGroup: 'rexp',
    params: {
      variable,
    },
    styleParams: {
      colorMap: {
        fieldSpec,
        colorSpec,
      },
    },
    fn: ({ deckProps, zoom, selection }) => {
      const dataStyleColor = makeDataColorAccessor(featureProperty(variable), colorMap(colorSpec));

      return basicMvtLayer(
        deckProps,
        {
          // UNDRR: Use direct tile URL template instead of TileJSON to avoid
          // tileserver-gl inserting the wrong host in tile URLs behind Traefik
          data: `/vector/data/${id}/{z}/{x}/{y}.pbf`,
          // UNDRR: Suppress tile load errors when data hasn't been loaded yet
          // (GEM data requires license request before download)
          onTileError: () => {},
        },
        border([100, 100, 100]),
        fillColor(dataStyleColor),
        mvtSelection({
          selectedFeatureId: getFeatureId(selection?.target.feature, uniqueIdProperty),
          uniqueIdProperty,
          selectionFillColor: [0, 0, 0, 0],
          selectionLineColor: [0, 255, 255, 255],
        }),
        {
          highlightColor: [255, 255, 255, 100],
        },
      );
    },
    dataFormatsFn: () => getGemRiskDataFormats(variable),
    dataAccessFn: ({ field }) => featureProperty(field),
    renderDetails(selection: InteractionTarget<VectorTarget>) {
      const feature = selection.target.feature;

      return React.createElement(SimpleAssetDetails, {
        feature: feature,
        label: 'GEM Global Seismic Risk',
        DetailsComponent: GemRiskDetails,
      });
    },
    renderTooltip: (hover: InteractionTarget<VectorTarget>) => {
      return React.createElement(VectorHoverDescription, {
        hoveredObject: hover,
        label: 'GEM Seismic Risk',
        color: '#eb752a',
        idValue: hover.target.feature.properties.id ?? '',
      });
    },
  };
}
