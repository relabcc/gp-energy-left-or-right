import React from 'react';

import Box from '../components/Box';
import NewBg from '../components/Backgrounds/NewBg';
import Grain from '../components/Backgrounds/Grain';
import PotentialDesktop from '../ai-canvas/Potential';
import PotentialMobile from '../ai-canvas/PotentialMobile';

const Potential = ({ isMobile, windowWidth }) => {
  const Canvas = isMobile ? PotentialMobile : PotentialDesktop;
  return (
    <Box height="100%" position="relative" overflow="hidden">
      <NewBg isMobile>
        <Canvas windowWidth={windowWidth} />
      </NewBg>
      <Grain />
    </Box>
  );
};

export default Potential;
