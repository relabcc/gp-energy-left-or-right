import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Box from '../src/components/Box';
import ActionButton from '../src/components/ActionButton';
import ActionButtonMobile from '../src/components/ActionButtonMobile';
import Button from '../src/components/Button';
import Fb from '../src/components/SVG/Fb';
import Line from '../src/components/SVG/Line';

storiesOf('Interactions', module)
  .add('Social', () => (
    <Box>
      <Button.icon w="3em">
        <Fb />
      </Button.icon>
      <Button.icon w="3em">
        <Line />
      </Button.icon>
    </Box>
  ))
  .add('Action Button', () => (
    <ActionButton
      w={[1, null, 1 / 2]}
      title="連署支持！"
    >
        要綠電，<br />
        無霾無懼
    </ActionButton>
  ))
  .add('Action Button Mobile', () => (
    <ActionButtonMobile
      w={[1, null, 1 / 2]}
      title="連署支持！"
    >
        要綠電，<br />
        無霾無懼
    </ActionButtonMobile>
  ));
