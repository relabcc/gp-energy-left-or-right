import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import withConnect from './DualBg/withConnect';

const RatioToggle = styled(({
  ratioSync,
  toggleSyncRatio,
  ratio,
  updateRatio,
  ...props
}) => (
  <Toggle
    defaultChecked={ratioSync}
    onChange={() => toggleSyncRatio()}
    {...props}
  />
))`
  &.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track,
  &.react-toggle--checked .react-toggle-track {
    background-color: ${themeGet('colors.cyan')};
  }
  &.react-toggle--focus .react-toggle-thumb,
  &.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb  {
    box-shadow: 0px 0px 2px 3px ${themeGet('colors.cyan')};
  }
`;

RatioToggle.propTypes = {
  ratioSync: PropTypes.bool,
  toggleSyncRatio: PropTypes.func,
};

RatioToggle.defaultProps = {
  ratioSync: true,
};

export default withConnect(RatioToggle);
