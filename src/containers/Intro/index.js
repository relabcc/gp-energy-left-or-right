import React from 'react';

import DualBg from '../DualBg';
import IntroOld from '../../ai-canvas/IntroOld';
import IntroNew from '../../ai-canvas/IntroNew';

const Intro = () => {
  return (
    <DualBg
      leftContent={(<IntroNew />)}
      rightContent={(<IntroOld />)}
    />
  );
};

export default Intro;
