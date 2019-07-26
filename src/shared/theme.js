import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red.A100,
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#1d2445',
    }
  }
});

export default theme;