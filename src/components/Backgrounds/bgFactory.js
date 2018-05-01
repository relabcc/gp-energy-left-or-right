import React from 'react';

import Box from '../Box';
import Image from '../Image';
import VerticalCenter from '../VerticalCenter';

export default (name, { left, right, color }) => {
  const Bg = (props) => (
    <Box position="relative" height="100%" bg={color}>
      <Box position="absolute" left="0" top="0" bottom="0">
        <Image height="100%" width="auto" src={left} />
      </Box>
      <Box position="absolute" right="0" top="0" bottom="0">
        <Image height="100%" width="auto" src={right} />
      </Box>
      <Box position="absolute" top="0" left="0" bottom="0" right="0">
        <VerticalCenter>
          <Box {...props} />
        </VerticalCenter>
      </Box>
    </Box>
  );

  Bg.displayName = name;

  return Bg;
};
