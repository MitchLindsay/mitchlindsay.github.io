import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import { theme } from '@src/lib';
import * as React from 'react';
import { render } from 'react-dom';

const muiTheme = createMuiTheme(theme);

const app: JSX.Element = (
  <MuiThemeProvider theme={muiTheme}>
    <Header />
    <Footer />
  </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  render(app, container);
});
