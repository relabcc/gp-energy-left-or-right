import React from 'react';

import DualBg from './DualBg';
import SystemOld from '../ai-canvas/SystemOld';
import SystemNew from '../ai-canvas/SystemNew';
import SystemNewMobile from '../ai-canvas/SystemNewMobile';
import SystemOldMobile from '../ai-canvas/SystemOldMobile';

const System = ({ isMobile, windowWidth }) => {
  const Left = isMobile ? SystemNewMobile : SystemNew;
  const Right = isMobile ? SystemOldMobile : SystemOld;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<Left windowWidth={windowWidth} />}
      rightContent={<Right windowWidth={windowWidth} />}
    />
  );
};

export default System;
