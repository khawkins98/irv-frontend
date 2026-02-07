// UNDRR: WorldRiskIndex layer — follows gar-aal/gar-aal-layer.ts pattern
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

import { getWriDataFormats } from './data-formats';
import { WriDetails } from './details';
import { WriVariableType } from './metadata';

// UNDRR: Linear scale because WRI scores are 0–100 index values (not monetary).
// Sequential color schemes per metric dimension.
const wriColorLookup: Record<WriVariableType, ColorSpec> = {
  W: {
    scale: d3.scale.scaleSequential,
    scheme: d3.scaleChromatic.interpolateYlOrRd,
    range: [0, 50],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  E: {
    scale: d3.scale.scaleSequential,
    scheme: d3.scaleChromatic.interpolateOranges,
    range: [0, 50],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  V: {
    scale: d3.scale.scaleSequential,
    scheme: d3.scaleChromatic.interpolateReds,
    range: [0, 100],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  S: {
    scale: d3.scale.scaleSequential,
    scheme: d3.scaleChromatic.interpolatePurples,
    range: [0, 100],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  C: {
    scale: d3.scale.scaleSequential,
    scheme: d3.scaleChromatic.interpolateBlues,
    range: [0, 100],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  A: {
    scale: d3.scale.scaleSequential,
    scheme: d3.scaleChromatic.interpolateGreens,
    range: [0, 100],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
};

export function wriLayer(variable: WriVariableType): ViewLayer {
  const fieldSpec: FieldSpec = {
    fieldGroup: 'properties',
    field: variable,
  };

  const colorSpec = wriColorLookup[variable];

  const id = 'worldriskindex';
  // UNDRR: Verified via ogrinfo — ISO is the 3-letter country code field.
  const uniqueIdProperty = 'ISO';

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
    dataFormatsFn: getWriDataFormats,
    dataAccessFn: ({ field }) => featureProperty(field),
    renderDetails(selection: InteractionTarget<VectorTarget>) {
      const feature = selection.target.feature;

      return React.createElement(SimpleAssetDetails, {
        feature: feature,
        label: 'WorldRiskIndex',
        DetailsComponent: WriDetails,
      });
    },
    renderTooltip: (hover: InteractionTarget<VectorTarget>) => {
      return React.createElement(VectorHoverDescription, {
        hoveredObject: hover,
        label: 'WorldRiskIndex',
        color: '#eb752a',
        idValue: hover.target.feature.properties.Name_EN,
      });
    },
  };
}
