import React from 'react';

import DualBg from './DualBg';
import PeopleOld from '../ai-canvas/PeopleOld';
import PeopleNew from '../ai-canvas/PeopleNew';

import withResponsive from '../hoc/withResponsive'

const People = ({ browser }) => {
  const isMobile = browser.lessThan.md;
  return (
    <DualBg
      isMobile={isMobile}
      leftContent={<PeopleNew />}
      rightContent={<PeopleOld />}
    />
  );
};

export default withResponsive(People);
