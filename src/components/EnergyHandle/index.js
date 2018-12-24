import React from 'react';
import styled, { keyframes } from 'styled-components';

import Box from '../Box'
import BackgroundImage from '../BackgroundImage'

import handle from './energy-handle.svg';
import handleArr from './handle-arr.svg';

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

const poke = ({ transform, isLeft }) => keyframes`
  0%, 75%{
    transform: ${transform} translateX(0);
  }
  33% {
    transform: ${transform} translateX(${isLeft ? '-' : ''}50%);
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

const Poking = styled(Box)`
  animation: ${poke} 2.5s ease infinite;
  ${({ isLeft }) => !isLeft && 'animation-delay: 0.5s;'}
`

const Arrow = ({ isLeft, ...props }) => (
  <Poking
    position="absolute"
    width="100%"
    left={isLeft ? '-120%' : '120%'}
    top="50%"
    isLeft={isLeft}
    transform="translateY(-50%)"
    {...props}
  >
    <BackgroundImage ratio={12 / 20} src={handleArr} transform={`${isLeft ? 'rotate(180deg)' : ''}`} />
  </Poking>
)

const EnergyHandle = ({ style, showHint, ...props }) => (
  <Box
    position="absolute"
    w="3em"
    top="0"
    bottom="0"
    style={{ cursor: 'col-resize', ...style }}
    className="ratio-handle"
    {...props}
  >
    <Box position="absolute" bottom="3em" w={1}>
      <Ripple bg="white" />
      {showHint && (
        <div>
          <Arrow isLeft />
          <Arrow />
        </div>
      )}
      <BackgroundImage src={handle} />
    </Box>
  </Box>
);

export default EnergyHandle;
