import React from 'react';

import withHeader from '../hoc/withHeader';
import Box from '../components/Box';
import Intro from '../containers/Intro';
import Cost from '../containers/Cost';
import System from '../containers/System';
import People from '../containers/People';
import Why from '../containers/Why';
import Potential from '../containers/Potential';

const Index = (props) => {
  return (
    <Box height="100vh" {...props}>
      <Intro />
      <Cost />
      <System />
      <People />
      <Why />
      <Potential />
    </Box>
  );
}

export default withHeader(Index);
