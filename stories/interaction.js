import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Box from '../src/components/Box';
import Button from '../src/components/Button';
import Fb from '../src/components/SVG/Fb';
import Line from '../src/components/SVG/Line';

storiesOf('Interactions', module)
  .add('Socail', () => (
    <Box>
      <Button.icon w="3em">
        <Fb />
      </Button.icon>
      <Button.icon w="3em">
        <Line />
      </Button.icon>
    </Box>
  ));
