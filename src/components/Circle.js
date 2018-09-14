import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';

const Circle = ({ children, border, borderColor, bg, is, ...props }) => (
  <Box {...props}>
    <Box position="relative" pt="100%">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        w={1}
        borderRadius="50%"
        border={border}
        borderColor={borderColor}
        bg={bg}
        is={is}
        lineHeight={0}
      >
        <Box
          top="50%"
          transform="translateY(-50%)"
          position="absolute"
          w={1}
          textAlign="center"
        >
          {children}
        </Box>
      </Box>
    </Box>
  </Box>
);

Circle.propTypes = {
  children: PropTypes.node,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  bg: PropTypes.string,
  is: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

export default Circle;
