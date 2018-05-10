import React from 'react';

import DualBg from './DualBg';
import IntroOld from '../ai-canvas/IntroOld';
import IntroNew from '../ai-canvas/IntroNew';
import IntroNewMobile from '../ai-canvas/IntroNewMobile';
import IntroOldMobile from '../ai-canvas/IntroOldMobile';

const Intro = ({ isMobile, windowWidth }) => {
  const Left = isMobile ? IntroNewMobile : IntroNew;
  const Right = isMobile ? IntroOldMobile : IntroOld;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<Left windowWidth={windowWidth} />}
      rightContent={<Right windowWidth={windowWidth} />}
    />
  );
};

export default Intro;
