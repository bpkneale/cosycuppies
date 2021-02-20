import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import "./theme.css"

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[50],
    },
    secondary: {
      main: red[200],
    },
  },
});