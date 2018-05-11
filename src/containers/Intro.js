import React from 'react';

import DualBg from './DualBg';
import IntroOld from '../ai-canvas/IntroOld';
import IntroNew from '../ai-canvas/IntroNew';
import IntroNewMobile from '../ai-canvas/IntroNewMobile';
import IntroOldMobile from '../ai-canvas/IntroOldMobile';

const Intro = ({ isMobile, ...props }) => {
  const Left = isMobile ? IntroNewMobile : IntroNew;
  const Right = isMobile ? IntroOldMobile : IntroOld;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<Left {...props} />}
      rightContent={<Right {...props} />}
    />
  );
};

export default Intro;
