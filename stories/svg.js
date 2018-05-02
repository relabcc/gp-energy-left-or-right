import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Box from '../src/components/Box';
import Logo from '../src/components/SVG/Logo';
import Fb from '../src/components/SVG/Fb';
import Line from '../src/components/SVG/Line';

storiesOf('SVG', module)
  .add('Logo', () => (
    <Box bg="green">
      <Logo w="20em" color="white" />
    </Box>
  ))
  .add('Socail', () => (
    <Box>
      <Fb w="3em" />
      <Line w="3em" />
    </Box>
  ));
