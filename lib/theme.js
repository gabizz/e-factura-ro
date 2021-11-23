import { createTheme } from '@mui/material/styles';
import { red, blue, green, orange, grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    default: {
      main: grey[500],
    },
    primary: {
      main: blue[900],
    },
    secondary: {
      main: red[900],
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: orange[900]
    },
    info: {
      main: green[900],
    },
    success: {
      main: blue[400]
    },
    grey: {
      main: grey[400]
    }
  },
});

export default theme;