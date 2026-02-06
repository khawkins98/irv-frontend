// UNDRR: GEM Global Active Faults layer — line layer with categorical coloring.
// Different from GAR AAL (polygon fill with continuous scale) — this uses
// categorical color by slip_type on line geometries.
import React from 'react';

import { InteractionTarget, VectorTarget } from '@/lib/data-map/interactions/types';
import { VectorHoverDescription } from '@/lib/data-map/tooltip/VectorHoverDescription';
import { ViewLayer } from '@/lib/data-map/view-layers';
import { basicMvtLayer } from '@/lib/deck/layers/basic-mvt-layer';
import { featureProperty } from '@/lib/deck/props/data-source';
import { mvtSelection } from '@/lib/deck/props/mvt-selection';
import { getFeatureId } from '@/lib/deck/utils/get-feature-id';

import { SimpleAssetDetails } from '@/details/features/asset-details';

import { getGemFaultsDataFormats } from './data-formats';
import { GemFaultDetails } from './details';
import { GEM_FAULT_DEFAULT_COLOR, GEM_FAULT_SLIP_COLORS } from './metadata';

// UNDRR: Categorical color accessor for fault line slip type
function faultColorAccessor(feature: any): [number, number, number, number] {
  const slipType = feature.properties?.slip_type;
  const rgb = GEM_FAULT_SLIP_COLORS[slipType] || GEM_FAULT_DEFAULT_COLOR;
  return [rgb[0], rgb[1], rgb[2], 200];
}

export function gemFaultsLayer(): ViewLayer {
  const id = 'gem_active_faults';
  const uniqueIdProperty = 'catalog_id';

  return {
    id,
    interactionGroup: 'hazards',
    params: {},
    styleParams: {},
    fn: ({ deckProps, zoom, selection }) => {
      return basicMvtLayer(
        deckProps,
        {
          // UNDRR: Use direct tile URL template instead of TileJSON to avoid
          // tileserver-gl inserting the wrong host in tile URLs behind Traefik
          data: `/vector/data/${id}/{z}/{x}/{y}.pbf`,
          // UNDRR: Line rendering for fault traces
          stroked: true,
          filled: false,
          lineWidthMinPixels: 1,
          getLineWidth: 50,
          getLineColor: faultColorAccessor,
          lineWidthScale: Math.max(1, 20 - (zoom || 3)),
        },
        mvtSelection({
          selectedFeatureId: getFeatureId(selection?.target.feature, uniqueIdProperty),
          uniqueIdProperty,
          selectionFillColor: [0, 0, 0, 0],
          selectionLineColor: [0, 255, 255, 255],
        }),
        {
          highlightColor: [255, 255, 255, 100],
          autoHighlight: true,
          pickable: true,
        },
      );
    },
    dataFormatsFn: getGemFaultsDataFormats,
    dataAccessFn: () => featureProperty('slip_type'),
    renderDetails(selection: InteractionTarget<VectorTarget>) {
      const feature = selection.target.feature;

      return React.createElement(SimpleAssetDetails, {
        feature: feature,
        label: 'GEM Active Fault',
        DetailsComponent: GemFaultDetails,
      });
    },
    renderTooltip: (hover: InteractionTarget<VectorTarget>) => {
      const props = hover.target.feature.properties;
      const name = props.name || props.fz_name || 'Unnamed Fault';
      return React.createElement(VectorHoverDescription, {
        hoveredObject: hover,
        label: 'Active Fault',
        color: '#d73027',
        idValue: `${name} (${props.slip_type || 'Unknown'})`,
      });
    },
  };
}
