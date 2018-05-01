import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Box from '../src/components/Box';
import Backgrounds from '../src/components/Backgrounds';
import OldBg from '../src/components/Backgrounds/OldBg';
import NewBg from '../src/components/Backgrounds/NewBg';

storiesOf('Layouts', module)
  .add('OldBg', () => (
    <Box height="50vh">
      <OldBg>
        <Box mx="auto" width={400} height={200} bg="red" />
      </OldBg>
    </Box>
  ))
  .add('NewBg', () => (
    <Box height="50vh">
      <NewBg>
        <Box mx="auto" width={400} height={200} bg="yellow" />
      </NewBg>
    </Box>
  ))
  .add('DualBg', () => (
    <Box height="50vh">
      <Backgrounds
        leftContent={<Box mx="auto" width={400} height={200} bg="red" />}
        rightContent={<Box mx="auto" width={400} height={200} bg="yellow" />}
      />
    </Box>
  ));

