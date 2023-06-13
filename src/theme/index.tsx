import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
// components
import { useSettingsContext } from '../components/settings';
//
import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import componentsOverride from './overrides';
import customShadows from './customShadows';
import GlobalStyles from './globalStyles';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeDirection } = useSettingsContext();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette('dark'),
      typography,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: shadows('dark'),
      customShadows: customShadows('dark'),
    }),
    []
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  );
}
