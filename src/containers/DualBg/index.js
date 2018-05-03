import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import injectReducer from '../../utils/injectReducer';
import withConnect from './withConnect';
import reducer from './reducer';

import Backgrounds from '../../components/Backgrounds';

const DualBg = ({ updateRatio, ...props }) => (
  <Backgrounds
    onRatioChange={updateRatio}
    {...props}
  />
);

DualBg.propTypes = {
  updateRatio: PropTypes.func,
};

const withReducer = injectReducer({ key: 'BG', reducer });

export default compose(
  withReducer,
  withConnect
)(DualBg);
