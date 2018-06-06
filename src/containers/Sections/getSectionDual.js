import React from 'react';

import EmbedSVG from '../../components/EmbedSVG';
import DualBg from '../DualBg';
import ratio from './ratio';

export default ({ left, right }) => {
  const Section = ({ isMobile, ...props }) => {
    const r = ratio[isMobile ? 'mobile' : 'desktop'];
    return (
      <DualBg
        isMobile={isMobile}
        leftContent={<EmbedSVG ratio={r} src={left} />}
        rightContent={<EmbedSVG ratio={r} src={right} />}
      />
    );
  };

  return Section;
};
