import React from 'react';
import PropTypes from 'prop-types';

import withConnect from './withConnect';

import Backgrounds from '../../components/Backgrounds';

const DualBg = ({ updateRatio, toggleSyncRatio, ...props }) => (
  <Backgrounds
    onRatioChange={updateRatio}
    {...props}
  />
);

DualBg.propTypes = {
  updateRatio: PropTypes.func,
};

export default withConnect(DualBg);
