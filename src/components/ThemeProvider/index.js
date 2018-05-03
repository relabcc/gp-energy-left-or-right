import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';

import theme from './theme';
import Box from '../Box';

export default (props) => (
  <ThemeProvider theme={theme}>
    <Box color="text" bg="blue" f={[14, null, 16]} {...props} />
  </ThemeProvider>
);
