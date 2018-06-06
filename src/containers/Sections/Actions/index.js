import React from 'react';

import New from './actions-dt.svg';
import NewMobile from './actions-mb.svg';

import SectionDual from '../SectionDual';

const Cotnent = ({ isMobile, ...props }) => {
  const cellpone = isMobile ? NewMobile : New;
  return (
    <SectionDual isMobile={cellpone} />
  );
};

export default Cotnent;
