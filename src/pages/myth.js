import React from 'react';
import Helmet from 'react-helmet';

import { myth } from '../text';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Text from '../components/Text';
import withHeader from '../hoc/withHeader';

import MythSlick from '../containers/Myth';

const Myth = ({ match, ...props }) => (
  <Flex height="100vh" align="center" bg="white" overflow="hidden"  {...props}>
    <Helmet
      title={myth.title}
      meta={[
        { name: 'description', content: myth.sub },
      ]}
    />
    <Box w={1}>
      <Text.h1>{myth.title}</Text.h1>
      <Text.h4 my="0.25em">{myth.sub}</Text.h4>
      <MythSlick my="2em" match={match} />
    </Box>
  </Flex>
);

export default withHeader(Myth);
