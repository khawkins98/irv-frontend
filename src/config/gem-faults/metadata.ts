// UNDRR: GEM Global Active Faults dataset metadata
// Field names from the GEM GAF GeoJSON (GitHub).
// Reference: https://github.com/GEMScienceTools/gem-global-active-faults
// Citation: Styron & Pagani (2020), Earthquake Spectra

export const GEM_FAULT_SLIP_TYPES = [
  'Normal',
  'Reverse',
  'Dextral',
  'Sinistral',
  'Normal-Dextral',
  'Normal-Sinistral',
  'Reverse-Dextral',
  'Reverse-Sinistral',
  'Dextral-Normal',
  'Sinistral-Normal',
  'Blind Thrust',
  'Anticline',
  'Subduction Thrust',
] as const;

export type GemFaultSlipType = (typeof GEM_FAULT_SLIP_TYPES)[number];

// UNDRR: Conventional tectonic color mapping for slip types.
// Major types get distinct colors; compound types inherit from primary component.
export const GEM_FAULT_SLIP_COLORS: Record<string, [number, number, number]> = {
  Normal: [215, 48, 39],         // red #d73027
  Reverse: [69, 117, 180],      // blue #4575b4
  Dextral: [117, 112, 179],     // purple #7570b3
  Sinistral: [27, 158, 119],    // green #1b9e77
  'Normal-Dextral': [215, 48, 39],
  'Normal-Sinistral': [215, 48, 39],
  'Reverse-Dextral': [69, 117, 180],
  'Reverse-Sinistral': [69, 117, 180],
  'Dextral-Normal': [117, 112, 179],
  'Sinistral-Normal': [27, 158, 119],
  'Blind Thrust': [69, 117, 180],
  Anticline: [230, 171, 2],     // orange #e6ab02
  'Subduction Thrust': [69, 117, 180],
};

// UNDRR: Default color for unknown/unclassified slip types
export const GEM_FAULT_DEFAULT_COLOR: [number, number, number] = [153, 153, 153]; // gray #999
