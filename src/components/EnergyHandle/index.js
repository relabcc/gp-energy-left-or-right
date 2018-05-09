import React from 'react';

import Box from '../Box'
import BackgroundImage from '../BackgroundImage'

import handle from './energy-handle.svg';

const EnergyHandle = ({ style, ...props }) => (
  <Box w="2em" style={{ cursor: 'col-resize', ...style }} {...props}>
    <BackgroundImage className="ratio-hanlde" src={handle} />
  </Box>
);

export default EnergyHandle;
