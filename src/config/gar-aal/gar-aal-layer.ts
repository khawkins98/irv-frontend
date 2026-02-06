// UNDRR: GAR 2015 Multi-Hazard AAL layer — follows regional-risk-layer.ts pattern
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

import { SOURCES } from '../sources';
import { getGarAalDataFormats } from './data-formats';
import { GarAalDetails } from './details';
import { GarAalVariableType } from './metadata';

// UNDRR: Log scale because AAL values span many orders of magnitude (thousands to billions USD).
// Domain starts at 1 (not 0) because log(0) is undefined; zeroIsEmpty catches 0 values.
const garAalColorLookup: Record<GarAalVariableType, ColorSpec> = {
  AAL: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolateOranges,
    range: [1, 50_000_000_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  EQ_AAL: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolateReds,
    range: [1, 50_000_000_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  FL_AAL: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolateBlues,
    range: [1, 50_000_000_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  WD_AAL: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolatePurples,
    range: [1, 50_000_000_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  TS_AAL: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolateGreens,
    range: [1, 50_000_000_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
  SS_AAL: {
    scale: d3.scale.scaleSequentialLog,
    scheme: d3.scaleChromatic.interpolateYlOrBr,
    range: [1, 50_000_000_000],
    empty: '#ccc',
    zeroIsEmpty: true,
  },
};

export function garAalLayer(variable: GarAalVariableType): ViewLayer {
  const fieldSpec: FieldSpec = {
    fieldGroup: 'properties',
    field: variable,
  };

  const colorSpec = garAalColorLookup[variable];

  const id = 'gar15_aal';
  const uniqueIdProperty = 'TERR_ID';

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
    dataFormatsFn: getGarAalDataFormats,
    dataAccessFn: ({ field }) => featureProperty(field),
    renderDetails(selection: InteractionTarget<VectorTarget>) {
      const feature = selection.target.feature;

      return React.createElement(SimpleAssetDetails, {
        feature: feature,
        label: 'GAR 2015 Average Annual Loss',
        DetailsComponent: GarAalDetails,
      });
    },
    renderTooltip: (hover: InteractionTarget<VectorTarget>) => {
      return React.createElement(VectorHoverDescription, {
        hoveredObject: hover,
        label: 'GAR 2015 AAL',
        color: '#eb752a',
        idValue: hover.target.feature.properties.TERR_NAME,
      });
    },
  };
}
