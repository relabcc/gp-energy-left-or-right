import React from 'react';

import withHeader from '../hoc/withHeader';
import Box from '../components/Box';
import Intro from '../containers/Intro';
import Why from '../containers/Why';

const Index = (props) => {
  return (
    <Box height="100vh" {...props}>
      <Intro />
      <Why />
    </Box>
  );
}

export default withHeader(Index);
