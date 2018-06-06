import React from 'react';

import Old from './intro-dt-2017.svg';
import New from './intro-dt-2035.svg';
import NewMobile from './intro-dt-2017.svg';
import OldMobile from './intro-mb-2017.svg';

import SectionDual from '../SectionDual';

const Cotnent = ({ isMobile, ...props }) => {
  const left = isMobile ? NewMobile : New;
  const right = isMobile ? OldMobile : Old;
  return (
    <SectionDual left={left} right={right} isMobile={isMobile} />
  );
};

export default Cotnent;
