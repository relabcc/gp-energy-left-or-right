import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Step from './Step';
import withResponsive from '../../hoc/withResponsive';

import { titles } from '../../text';

const SideNav = ({
  scrollToSlide,
  activeSlide,
  browser,
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
        active={index === activeSlide}
        title={title}
        onClick={() => scrollToSlide(index)}
        isMobile={browser.lessThan.md}
      />
    ))}
  </Box>
);

SideNav.propTypes = {
  scrollToSlide: PropTypes.func,
  browser: PropTypes.shape({
    lessThan: PropTypes.shape({
      md: PropTypes.bool,
    }),
  }),
  getCurrentSlideIndex: PropTypes.func,
  activeSlide: PropTypes.number,
};

export default withResponsive(SideNav);
