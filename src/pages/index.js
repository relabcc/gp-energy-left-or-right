import React from 'react';

import withHeader from '../hoc/withHeader';
import Box from '../components/Box';
import Intro from '../containers/Intro';

const Index = (props) => {
  return (
    <Box height="100vh" {...props}>
      <Intro />
    </Box>
  );
}

export default withHeader(Index);
