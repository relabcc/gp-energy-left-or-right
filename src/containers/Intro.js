import React from 'react';

import DualBg from './DualBg';
import IntroOld from '../ai-canvas/IntroOld';
import IntroNew from '../ai-canvas/IntroNew';
import IntroNewMobile from '../ai-canvas/IntroNewMobile';
import IntroOldMobile from '../ai-canvas/IntroOldMobile';

import withResponsive from '../hoc/withResponsive'

const Intro = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={isMobile ? <IntroNewMobile /> : <IntroNew />}
      rightContent={isMobile ? <IntroOldMobile /> : <IntroOld />}
    />
  );
};

export default withResponsive(Intro);
