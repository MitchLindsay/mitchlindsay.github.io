import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import * as React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import theme from './theme';

const muiTheme = createMuiTheme(theme);

const app: JSX.Element = (
  <MuiThemeProvider theme={muiTheme}>
    <Header />
  </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  render(app, container);
});
