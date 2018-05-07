import React from 'react';

import DualBg from './DualBg';
import WhyOld from '../ai-canvas/WhyOld';
import WhyNew from '../ai-canvas/WhyNew';
import WhyNewMobile from '../ai-canvas/WhyNewMobile';
import WhyOldMobile from '../ai-canvas/WhyOldMobile';

import withResponsive from '../hoc/withResponsive'

const Why = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={isMobile ? <WhyNewMobile /> : <WhyNew />}
      rightContent={isMobile ? <WhyOldMobile /> : <WhyOld />}
    />
  );
};

export default withResponsive(Why);
