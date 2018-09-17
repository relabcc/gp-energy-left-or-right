import React from 'react';
import PropTypes from 'prop-types';

import withResponsive from '../../hoc/withResponsive';

import Flex from '../../components/Flex';
import Logo from '../../components/SVG/Logo';
import theme from '../../components/ThemeProvider/theme';

const logoWidth = '15em';

const Header = ({ browser }) => (
  <Flex
    position={browser.greaterThan.sm ? 'fixed' : 'relative'}
    zIndex={99}
    height={theme.headerHeight}
    bg="cyan"
    color="white"
    w={1}
    alignItems="center"
    justifyContent="center"
  >
    <Logo w={logoWidth} />
  </Flex>
);

Header.propTypes = {
  browser: PropTypes.shape(),
};

export default withResponsive(Header);
