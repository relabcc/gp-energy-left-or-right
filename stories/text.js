import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Text from '../src/components/Text';

storiesOf('Text', module)
  .add('Text', () => (
    <Text>能源也能左右世界</Text>
  ));
