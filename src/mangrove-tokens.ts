/**
 * Mangrove design system tokens.
 * Mirrors key values from @undrr/undrr-mangrove/scss/assets/scss/_variables.scss
 * @see https://github.com/unisdr/undrr-mangrove
 */

// --- Colors: blue ---
export const mgColors = {
  blue: {
    50: '#e6edf4',
    100: '#ccdce9',
    200: '#b3cade',
    300: '#99b9d3',
    400: '#80a7c8',
    500: '#6695bd',
    600: '#4d84b2',
    700: '#3372a7',
    800: '#1a619c',
    900: '#004f91',
  },
  orange: {
    50: '#fdf1ea',
    100: '#fbe3d4',
    200: '#f9d6bf',
    300: '#f7c8aa',
    400: '#f5ba95',
    500: '#f3ac7f',
    600: '#f19e6a',
    700: '#ef9155',
    800: '#ed833f',
    900: '#eb752a',
  },
  red: {
    50: '#f9e6e9',
    100: '#f3ced2',
    200: '#ecb5bc',
    300: '#e69da6',
    400: '#e08490',
    500: '#da6b79',
    600: '#d45363',
    700: '#cd3a4d',
    800: '#c72236',
    900: '#c10920',
  },
  neutral: {
    0: '#fff',
    25: '#f2f2f2',
    50: '#e6e6e6',
    100: '#ccc',
    200: '#b3b3b3',
    300: '#999',
    400: '#808080',
    500: '#666',
    600: '#4d4d4d',
    700: '#333',
    800: '#1a1a1a',
    900: '#000',
  },
} as const;

// --- Sendai Framework ---
export const sendaiColors = {
  red: '#c10920',
  purple: '#962987',
  orange: '#eb752a',
  turquoise: '#00afae',
} as const;

// --- Semantic tokens ---
export const mgInteractive = mgColors.blue[900]; // #004f91
export const mgInteractiveActive = mgColors.blue[700]; // #3372a7
export const mgText = mgColors.neutral[800]; // #1a1a1a

// --- Font families ---
export const mgFontFamily = 'Roboto, sans-serif';
export const mgFontFamilyCondensed = 'Roboto Condensed, sans-serif';
