import React from 'react';

import Old from './cost-dt-2017.svg';
import New from './cost-dt-2035.svg';
import NewMobile from './cost-mb-2035.svg';
import OldMobile from './cost-mb-2017.svg';

import SectionDual from '../SectionDual';

const Cotnent = ({ isMobile, ...props }) => {
  const left = isMobile ? NewMobile : New;
  const right = isMobile ? OldMobile : Old;
  return (
    <SectionDual left={left} right={right} isMobile={isMobile} />
  );
};

export default Cotnent;
