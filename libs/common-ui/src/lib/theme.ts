import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@mui/material';

// put custom theme here
export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#4376f5',
    },
    secondary: {
      main: '#ffc137',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily:
        '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
};

const customTheme: Theme = createTheme(themeOptions);
export const theme = responsiveFontSizes(customTheme);
