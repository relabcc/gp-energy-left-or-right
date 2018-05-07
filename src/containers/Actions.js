import React from 'react';

import Box from '../components/Box';
import Grain from '../components/Backgrounds/Grain';
import Actions from '../ai-canvas/Actions';

export default () => {
  return (
    <Box height="100%" position="relative" bg="blue">
      <Actions />
      <Grain />
    </Box>
  );
};
