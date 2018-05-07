import React from 'react';

import DualBg from './DualBg';
import SystemOld from '../ai-canvas/SystemOld';
import SystemNew from '../ai-canvas/SystemNew';
import SystemNewMobile from '../ai-canvas/SystemNewMobile';
import SystemOldMobile from '../ai-canvas/SystemOldMobile';

import withResponsive from '../hoc/withResponsive'

const System = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={isMobile ? <SystemNewMobile /> : <SystemNew />}
      rightContent={isMobile ? <SystemOldMobile /> : <SystemOld />}
    />
  );
};

export default withResponsive(System);
