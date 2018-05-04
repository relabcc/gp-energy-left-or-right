import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Step from './Step';

import { titles } from '../../text';

const SideNav = ({ onSetActive, isSm, active, ...props }) => (
  <Box
    position="fixed"
    top="50%"
    right="1em"
    transform="translateY(-50%)"
    z={100}
    {...props}
  >
    {titles.map((title, index) => (
      <Step
        key={index}
        active={index === active}
        title={title}
        onClick={() => onSetActive(index)}
        isSm={isSm}
      />
    ))}
  </Box>
);

SideNav.propTypes = {
  onSetActive: PropTypes.func,
  isSm: PropTypes.bool,
  active: PropTypes.bool,
};

export default SideNav;
