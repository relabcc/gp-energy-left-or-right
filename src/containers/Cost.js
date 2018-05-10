import React from 'react';

import DualBg from './DualBg';
import CostOld from '../ai-canvas/CostOld';
import CostNew from '../ai-canvas/CostNew';
import CostNewMobile from '../ai-canvas/CostNewMobile';
import CostOldMobile from '../ai-canvas/CostOldMobile';

const Cost = ({ isMobile, windowWidth }) => {
  const Left = isMobile ? CostNewMobile : CostNew;
  const Right = isMobile ? CostOldMobile : CostOld;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<Left windowWidth={windowWidth} />}
      rightContent={<Right windowWidth={windowWidth} />}
    />
  );
};

export default Cost;
