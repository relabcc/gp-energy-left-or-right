import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Text from '../src/components/Text';
import Title from '../src/components/Title';

storiesOf('Text', module)
  .add('Text', () => (
    <Text>能源也能左右世界</Text>
  ))
  .add('Title', () => (
    <Title>系統運作模式的比較</Title>
  ));
