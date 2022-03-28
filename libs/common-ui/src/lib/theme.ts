import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@mui/material';

// put custom theme here
export const themeOptions: ThemeOptions = {};

const customTheme: Theme = createTheme(themeOptions);
export const theme = responsiveFontSizes(customTheme);
