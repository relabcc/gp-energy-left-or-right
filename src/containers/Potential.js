import React from 'react';

import Box from '../components/Box';
import NewBg from '../components/Backgrounds/NewBg';
import Grain from '../components/Backgrounds/Grain';
import Potential from '../ai-canvas/Potential';

const People = () => {
  return (
    <Box height="100%" position="relative">
      <NewBg isMobile>
        <Potential />
      </NewBg>
      <Grain />
    </Box>
  );
};

export default People;
