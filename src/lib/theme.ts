import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import createPalette from '@material-ui/core/styles/createPalette';
import { colors } from '@src/lib';

export const theme: ThemeOptions = {
  overrides: {
    MuiTypography: {
      title: {
        fontWeight: 400
      }
    }
  },
  palette: createPalette({
    primary: {
      main: colors.red
    },
    secondary: {
      main: colors.black
    }
  })
};
