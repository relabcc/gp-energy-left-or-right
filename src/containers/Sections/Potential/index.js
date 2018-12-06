import React from 'react';

import New from './potential-dt/text.svg';
import NewMobile from './potential-mb/text.svg';
import NewBg from './potential-dt/image.png';
import NewMobileBg from './potential-mb/image.png';

import Box from '../../../components/Box';
import TheNewBg from '../../../components/Backgrounds/NewBg';
import Grain from '../../../components/Backgrounds/Grain';
import EmbedSVG from '../../../components/EmbedSVG';
import { ratio } from '../creatSection';

const Cotnent = ({ isMobile }) => {
  const src = isMobile ? NewMobile : New;
  const bg = isMobile ? NewMobileBg : NewBg;
  const r = ratio[isMobile ? 'mobile' : 'desktop'];
  return (
    <Box height="100%" position="relative" overflow="hidden">
      <TheNewBg isMobile>
        <EmbedSVG ratio={r} src={src} bg={bg} />
      </TheNewBg>
      <Grain />
    </Box>
  );
};

export default Cotnent;
