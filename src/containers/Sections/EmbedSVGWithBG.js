import React from 'react';

import Box from '../../components/Box';
import BackgroundImage from '../../components/BackgroundImage';
import EmbedSVG from '../../components/EmbedSVG';

export default ({ r, left, bg }) => (
  <Box position="relative" height="100%">
    {bg && <BackgroundImage position="absolute" ratio={r} src={bg} />}
    <EmbedSVG ratio={r} src={left} />
  </Box>
)
