import React from 'react';

import EmbedSVG from '../../components/EmbedSVG';
import DualBg from '../DualBg';

export const ratio = {
  mobile: 617.422 / 375,
  desktop: 718 / 1334,
};

const SectionDual = ({ isMobile, left, right, no, ...props }) => {
  const r = ratio[isMobile ? 'mobile' : 'desktop'];
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<EmbedSVG ratio={r} src={left} />}
      rightContent={<EmbedSVG ratio={r} src={right} />}
    />
  );
};

export default SectionDual;
