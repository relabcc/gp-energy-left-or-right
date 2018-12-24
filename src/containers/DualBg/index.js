import React from 'react';
import PropTypes from 'prop-types';

import withConnect from './withConnect';

import Backgrounds from '../../components/Backgrounds';
import Box from '../../components/Box';

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
}) => inited ? (
  <Backgrounds
    onRatioChange={updateRatio}
    ratioSync={ratioSync}
    ratio={ratio}
    showHint={introPlayed && showHint}
    firstDragged={firstDragged}
    {...props}
  />
) : (
  <Box height="100vh" />
);

DualBg.propTypes = {
  updateRatio: PropTypes.func,
};

DualBg.defaultProps = {
  ratioSync: true,
};

export default withConnect(DualBg);
