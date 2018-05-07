import React from 'react';

import Box from '../components/Box';
import NewBg from '../components/Backgrounds/NewBg';
import Grain from '../components/Backgrounds/Grain';
import PotentialDesktop from '../ai-canvas/Potential';
import PotentialMobile from '../ai-canvas/PotentialMobile';
import withResponsive from '../hoc/withResponsive'

const Potential = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <Box height="100%" position="relative" overflow="hidden">
      <NewBg isMobile>
        {isMobile ? <PotentialMobile /> : <PotentialDesktop />}
      </NewBg>
      <Grain />
    </Box>
  );
};

export default withResponsive(Potential);
