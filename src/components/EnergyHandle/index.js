import React from 'react';
import styled, { keyframes } from 'styled-components';

import Box from '../Box'
import BackgroundImage from '../BackgroundImage'

import handle from './energy-handle.svg';

const ripple = keyframes`
  0%{
    opacity: 1;
    transform: scale(1);
  }
  50%, 100% {
    opacity: 0;
    transform: scale(2);
  }
`;

const Ripple = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${ripple} 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  border-radius: 50%;
`;

const EnergyHandle = ({ style, showHint, ...props }) => (
  <Box w="3em" style={{ cursor: 'col-resize', ...style }} {...props}>
    {showHint && <Ripple bg="white" />}
    <BackgroundImage className="ratio-hanlde" src={handle} />
  </Box>
);

export default EnergyHandle;
