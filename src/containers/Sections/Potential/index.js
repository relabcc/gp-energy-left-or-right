import React from 'react';

import New from './potential-dt.svg';
import NewMobile from './potential-mb.svg';

import Box from '../../../components/Box';
import NewBg from '../../../components/Backgrounds/NewBg';
import Grain from '../../../components/Backgrounds/Grain';
import EmbedSVG from '../../../components/EmbedSVG';
import { ratio } from '../SectionDual';

const Cotnent = ({ isMobile, ...props }) => {
  const src = isMobile ? NewMobile : New;
  const r = ratio[isMobile ? 'mobile' : 'desktop'];
  return (
    <Box height="100%" position="relative" overflow="hidden">
      <NewBg isMobile>
        <EmbedSVG ratio={r} src={src} />
      </NewBg>
      <Grain />
    </Box>
  );
};

export default Cotnent;
