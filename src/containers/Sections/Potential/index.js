import React from 'react';

import New from './potential-dt.svg';
import NewMobile from './potential-mb.svg';

import SectionDual from '../SectionDual';

const Cotnent = ({ isMobile, ...props }) => {
  const cellpone = isMobile ? NewMobile : New;
  return (
    <SectionDual isMobile={cellpone} />
  );
};

export default Cotnent;
