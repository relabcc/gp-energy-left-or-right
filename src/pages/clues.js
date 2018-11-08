import React from 'react';

import Box from '../components/Box';
import Text from '../components/Text';

import StoriesGrid from '../containers/StoriesGrid';

import withHeader from '../hoc/withHeader'

class Stories extends React.PureComponent {
  state = {}

  render() {
    return (
      <Box {...this.props} align="center">
        <Text.h2 pt="3em" color="cyan">能源線索大蒐集</Text.h2>
        <Text my="0.5em">____的時候想一想，21道微想題</Text>
        <StoriesGrid />
      </Box>
    )
  }
}

export default withHeader(Stories);
