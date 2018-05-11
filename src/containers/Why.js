import React from 'react';

import DualBg from './DualBg';
import WhyOld from '../ai-canvas/WhyOld';
import WhyNew from '../ai-canvas/WhyNew';
import WhyNewMobile from '../ai-canvas/WhyNewMobile';
import WhyOldMobile from '../ai-canvas/WhyOldMobile';

const Why = ({ isMobile, ...props }) => {
  const Left = isMobile ? WhyNewMobile : WhyNew;
  const Right = isMobile ? WhyOldMobile : WhyOld;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<Left {...props} />}
      rightContent={<Right {...props} />}
    />
  );
};

export default Why;
