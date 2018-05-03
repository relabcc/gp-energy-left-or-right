import React from 'react';

import Box from '../Box';
import VerticalCenter from '../VerticalCenter';

export default (name, { Left, Right, color }) => {
  const Bg = ({ isMobile, ...props }) => (
    <Box position="relative" height="100%" bg={color}>
      <Box position="absolute" left="0" top="0" bottom="0">
        <Left height="100%" isMobile={isMobile} />
      </Box>
      <Box position="absolute" right="0" top="0" bottom="0">
        <Right align="right" height="100%" isMobile={isMobile} />
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
