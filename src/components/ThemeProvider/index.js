import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import 'sanitize.css';

import theme from './theme';
import Box from '../Box';

import '../../web-font';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    font-family: ${theme.font};
  }

  body.ratio-dragging * {
    user-select: none;
  }
`;

export default (props) => (
  <ThemeProvider theme={theme}>
    <Box color="text" bg="blue" f={[14, null, 16]} {...props} />
  </ThemeProvider>
);
