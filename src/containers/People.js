import React from 'react';

import DualBg from './DualBg';
import PeopleOld from '../ai-canvas/PeopleOld';
import PeopleNew from '../ai-canvas/PeopleNew';
import PeopleNewMobile from '../ai-canvas/PeopleNewMobile';
import PeopleOldMobile from '../ai-canvas/PeopleOldMobile';

const People = ({ isMobile, ...props }) => {
  const Left = isMobile ? PeopleNewMobile : PeopleNew;
  const Right = isMobile ? PeopleOldMobile : PeopleOld;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<Left {...props} />}
      rightContent={<Right {...props} />}
    />
  );
};

export default People;