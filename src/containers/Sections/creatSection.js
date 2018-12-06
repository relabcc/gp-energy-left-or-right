import React from 'react';

import EmbedSVG from '../../components/EmbedSVG';
import DualBg from '../DualBg';

export const ratio = {
  mobile: 617.422 / 375,
  desktop: 718 / 1334,
};

export default (desktop, mobile, deskBg, mobileBg) => (props) => {
  const { isMobile } = props;
  const left = isMobile ? mobile[1] : desktop[1];
  const right = isMobile ? mobile[0] : desktop[0];
  const leftBg = isMobile ? mobileBg[1] : deskBg[1];
  const rightBg = isMobile ? mobileBg[0] : deskBg[0];
  const r = ratio[isMobile ? 'mobile' : 'desktop'];
  return (
    <DualBg
      leftContent={<EmbedSVG ratio={r} src={left} bg={leftBg} />}
      rightContent={<EmbedSVG ratio={r} src={right} bg={rightBg} />}
      {...props}
    />
  );
}
