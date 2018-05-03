import React from 'react';

import DualBg from './DualBg';
import WhyOld from '../ai-canvas/WhyOld';
import WhyNew from '../ai-canvas/WhyNew';

import withResponsive from '../hoc/withResponsive'

const Why = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<WhyNew />}
      rightContent={<WhyOld />}
    />
  );
};

export default withResponsive(Why);
