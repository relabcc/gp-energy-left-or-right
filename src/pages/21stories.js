import React from 'react';
import PropTypes from 'prop-types';

import Box from '../components/Box';
import Text from '../components/Text';
import Flex from '../components/Flex';

import StoriesGrid from '../containers/StoriesGrid';

import withHeader from '../hoc/withHeader'

class Stories extends React.PureComponent {
  state = {}

  render() {
    return (
      <Box {...this.props} align="center">
        <Text.h2 pt="3em" color="cyan">____的時候想一想，21道微想題</Text.h2>
        <Text>2018年你對綠電的誤解還停在2008嗎？</Text>
        <StoriesGrid />
      </Box>
    )
  }
}

export default withHeader(Stories);
