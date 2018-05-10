import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from '../components/Box';

const AiCanvas = ({
    ratio,
    layers,
    canvasWidth,
    windowWidth,
    ...props
  }) => (
    <Box
      position="relative"
      overflow="hidden"
      pb={`${ratio * 100}%`}
      style={{ fontSize: `${(windowWidth / canvasWidth) * 1}px` }}
      {...props}
    >
      {layers.map(({ attr, layer, name }) => (
        <Box position="absolute" {...attr} key={name}>
          {layer}
        </Box>
      ))}
    </Box>
  );

AiCanvas.propTypes = {
  layers: PropTypes.array,
  ratio: PropTypes.number,
  canvasWidth: PropTypes.number,
  windowWidth: PropTypes.number,
};

export default AiCanvas;
