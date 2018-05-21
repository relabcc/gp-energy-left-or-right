import React from 'react';
import PropTypes from 'prop-types';

import withConnect from './withConnect';

import Backgrounds from '../../components/Backgrounds';

const DualBg = ({
  updateRatio,
  toggleSyncRatio,
  showHint,
  dispatch,
  inited,
  setInited,
  firstDragged,
  ratio,
  ratioSync,
  introPlayed,
  introPlayRequested,
  introPlayFinished,
  playIntro,
  ...props
}) => (
  <Backgrounds
    onRatioChange={updateRatio}
    ratioSync={ratioSync}
    ratio={ratio}
    showHint={introPlayFinished && showHint}
    firstDragged={firstDragged}
    {...props}
  />
);

DualBg.propTypes = {
  updateRatio: PropTypes.func,
};

DualBg.defaultProps = {
  ratioSync: true,
};

export default withConnect(DualBg);
