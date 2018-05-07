import React from 'react';

import DualBg from './DualBg';
import PeopleOld from '../ai-canvas/PeopleOld';
import PeopleNew from '../ai-canvas/PeopleNew';
import PeopleNewMobile from '../ai-canvas/PeopleNewMobile';
import PeopleOldMobile from '../ai-canvas/PeopleOldMobile';

import withResponsive from '../hoc/withResponsive'

const People = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={isMobile ? <PeopleNewMobile /> : <PeopleNew />}
      rightContent={isMobile ? <PeopleOldMobile /> : <PeopleOld />}
    />
  );
};

export default withResponsive(People);
