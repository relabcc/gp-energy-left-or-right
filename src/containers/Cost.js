import React from 'react';

import DualBg from './DualBg';
import CostOld from '../ai-canvas/CostOld';
import CostNew from '../ai-canvas/CostNew';
import CostNewMobile from '../ai-canvas/CostNewMobile';
import CostOldMobile from '../ai-canvas/CostOldMobile';

import withResponsive from '../hoc/withResponsive'

const Cost = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={isMobile ? <CostNewMobile /> : <CostNew />}
      rightContent={isMobile ? <CostOldMobile /> : <CostOld />}
    />
  );
};

export default withResponsive(Cost);
