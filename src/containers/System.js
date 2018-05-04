import React from 'react';

import DualBg from './DualBg';
import SystemOld from '../ai-canvas/SystemOld';
import SystemNew from '../ai-canvas/SystemNew';

import withResponsive from '../hoc/withResponsive'

const System = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<SystemNew />}
      rightContent={<SystemOld />}
    />
  );
};

export default withResponsive(System);
