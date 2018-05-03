import React from 'react';
import PropTypes from 'prop-types';
import ContainerDimensions from 'react-container-dimensions';

import Box from '../components/Box';

function AiCanvas({ ratio, layers, canvasWidth, ...props }) {
  return (
    <ContainerDimensions>
      {({ width }) => (
        <Box
          position="relative"
          overflow="hidden"
          pb={`${ratio * 100}%`}
          style={{ fontSize: `${(width / canvasWidth) * 1}px` }}
          {...props}
        >
          {layers.map(({ attr, layer, name }) => (
            <Box position="absolute" {...attr} key={name}>
              {layer}
            </Box>
          ))}
        </Box>
      )}
    </ContainerDimensions>
  );
}

AiCanvas.propTypes = {
  layers: PropTypes.array,
  ratio: PropTypes.number,
  canvasWidth: PropTypes.number,
};

export default AiCanvas;
