import React from 'react';

import DualBg from './DualBg';
import CostOld from '../ai-canvas/CostOld';
import CostNew from '../ai-canvas/CostNew';

import withResponsive from '../hoc/withResponsive'

const Cost = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<CostNew />}
      rightContent={<CostOld />}
    />
  );
};

export default withResponsive(Cost);
