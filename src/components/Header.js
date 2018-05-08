import React, { PureComponent } from 'react';
import Bars from 'react-icons/lib/fa/bars';
import { slide as Menu } from 'react-burger-menu';

import theme from './ThemeProvider/theme';
import Box from './Box';
import Flex from './Flex';
import Link from './Link';
import Text from './Text';
import Button from './Button';
import Logo from './SVG/Logo';
import Fb from './SVG/Fb';
import Line from './SVG/Line';
import withResponsive from '../hoc/withResponsive'

import { links } from '../text';

const styles = {
  bmMenuWrap: {
    paddingTop: '1em',
    width: '100%',
  },
  bmOverlay: {
    top: theme.headerHeight[0],
    left: 0,
    background: theme.colors.fade.black[50],
  },
};

class Header extends PureComponent {
  state = {
    isOpen: false,
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  handleStateChange = ({ isOpen }) => this.setState({ isOpen })

  renderLink = ({ link, label }, index) => (
    <Link
      key={index}
      href={link}
      color={['white', null, 'gray']}
      f={['1em', null, '0.875em']}
      my={['1em', null, 0]}
    >{label}</Link>);

  render() {
    const { browser } = this.props;
    const isMobile = browser.lessThan.md;
    return (
      <Flex
        position="fixed"
        height={theme.headerHeight}
        px="0.5em"
        bg="fade.white.70"
        align="center"
        w={1}
        zIndex={99}
      >
        <Logo w={175} color="cyan" />
        <Box flex={1} />
        {!isMobile && (
          <Flex align="center">
            {links.reduce((seprated, link, index) => {
              const ele = this.renderLink(link, index);
              if (index === 0) return seprated.concat(ele);
              return seprated.concat([<Text mx="0.75em" key={`${index}-sep`} color="gray">|</Text>, ele]);
            }, [])}
          </Flex>
        )}
        <Flex align="center" pl="1em">
          <Button.icon mr="0.5em" w="2em"><Fb /></Button.icon>
          <Button.icon w="2em"><Line /></Button.icon>
        </Flex>
        {isMobile && (
          <div>
            <Box is={Bars} color="cyan" f="1.75em" ml="0.5em" onClick={this.toggleOpen} />
            <Menu
              right
              isOpen={this.state.isOpen}
              onStateChange={this.handleStateChange}
              customBurgerIcon={false}
              customCrossIcon={false}
              styles={styles}
            >
              {links.map(this.renderLink)}
            </Menu>
          </div>
        )}
      </Flex>
    )
  }
}

export default withResponsive(Header);
