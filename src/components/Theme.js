import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: "#2C4FFE"
    },
    background: {
      contrast: grey[100],
    }
  },
  typography: {
    useNextVariants: true,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple
    },
  },
  layout: {
    contentMaxWidth: 1112,
  }
});

theme.shadows[1] = '0 3px 3px rgba(0,0,0,.08)';
theme.shadows[2] = '0 10px 10px rgba(0,0,0,.08)';
theme.shadows[4] = '0px 2px 40px 0px rgba(0,0,0,0.08)';

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
