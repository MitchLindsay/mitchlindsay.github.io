import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import createPalette from '@material-ui/core/styles/createPalette';

const theme: ThemeOptions = {
  palette: createPalette({
    primary: {
      main: '#E65551'
    },
    secondary: {
      main: '#2A2C2B'
    }
  })
};

export default theme;
