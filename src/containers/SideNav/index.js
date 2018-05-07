import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Step from './Step';

import { titles } from '../../text';

const SideNav = ({
  scrollToSlide,
  getCurrentSlideIndex,
}) => (
  <Box
    position="fixed"
    top="50%"
    right="1em"
    transform="translateY(-50%)"
    zIndex={100}
  >
    {titles.map((title, index) => (
      <Step
        key={index}
        active={index === getCurrentSlideIndex()}
        title={title}
        onClick={() => scrollToSlide(index)}
      />
    ))}
  </Box>
);

SideNav.propTypes = {
  scrollToSlide: PropTypes.func,
  isSm: PropTypes.bool,
  getCurrentSlideIndex: PropTypes.func,
};

export default SideNav;
