import { createTheme } from '@mui/material/styles';

import { mgFontFamily, mgFontFamilyCondensed, mgInteractive, mgText } from './mangrove-tokens';

declare module '@mui/material/styles' {
  interface Palette {
    map: Palette['primary'];
  }

  interface PaletteOptions {
    map: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    text: {
      primary: mgText,
    },
    primary: {
      main: mgInteractive,
    },
    map: {
      main: '#ffffff',
      dark: '#aaaaaa',
      light: '#aaaaaa',
      contrastText: '#222',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: '',
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          /**
           * Change disabled accordion style to white background,
           * by default text will still be grayed out
           */
          '&.Mui-disabled': {
            backgroundColor: 'white',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          verticalAlign: 'top',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '& +.MuiInputBase-root': {
            marginTop: '2px',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: mgFontFamily,
    h1: {
      fontWeight: 700,
      fontFamily: `${mgFontFamilyCondensed}, ${mgFontFamily}`,
      fontSize: '3rem',
      '@media (min-width:900px)': {
        fontSize: '4.5rem',
      },
      margin: '1rem 0',
      letterSpacing: '-1px',
      lineHeight: 1.1,
      maxWidth: '11em',
    },
    h2: {
      fontWeight: 700,
      fontFamily: mgFontFamily,
      fontSize: '1.5rem',
      margin: '0.5rem 0',
    },
    h3: {
      fontWeight: 700,
      fontFamily: mgFontFamily,
      fontSize: '1.25rem',
    },
    h5: {
      fontWeight: 700,
      fontFamily: mgFontFamily,
      fontSize: '1.5rem',
      letterSpacing: '-0.5px',
      margin: '1rem 0 2rem',
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 700,
      fontFamily: mgFontFamily,
      fontSize: '1.5rem',
      letterSpacing: '-0.5px',
    },
  },
});

export const globalStyleVariables = {
  controlSidebarWidth: 400,
  detailSidebarWidth: 500,
  navbarHeight: 70,
  detailsSidebarWidth: 400,
};
