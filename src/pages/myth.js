import React, { PureComponent } from 'react';
import { compose } from 'redux';

import { myth } from '../text';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Text from '../components/Text';
import withHeader from '../hoc/withHeader';
import withResponsive from '../hoc/withResponsive';

import MythSlick from '../containers/Myth';

class Myth extends PureComponent {
  render() {
    const {
      browser,
      ...props
    } = this.props;
    return (
      <Flex height="100vh" align="center" bg="white" {...props}>
        <Box w={1}>
          <Text.h1>{myth.title}</Text.h1>
          <Text.h4 my="0.25em">{myth.sub}</Text.h4>
          <MythSlick my="2em" />
        </Box>
      </Flex>
    );
  }
}

export default compose(
  withHeader,
  withResponsive
)(Myth);
