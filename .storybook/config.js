import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { injectGlobal } from 'styled-components';
import 'sanitize.css';

import Box from '../src/components/Box';
import ThemeProvider from '../src/components/ThemeProvider';
import theme from '../src/components/ThemeProvider/theme';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    background: ${theme.colors.background};
    font-family: ${theme.font};
  }
`;

addDecorator((story) => (
  <ThemeProvider>
    <Box p="1em">
      {story()}
    </Box>
  </ThemeProvider>
));

// automatically import all files ending in stories
const req = require.context('../stories', true, /.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
