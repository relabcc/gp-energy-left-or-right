import React, { PureComponent } from 'react';
import Bars from 'react-icons/lib/fa/bars';
import Close from 'react-icons/lib/fa/close';
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

import config from '../../gatsby-config';

const url = config.siteMetadata.host + config.pathPrefix;

const styles = {
  bmMenuWrap: {
    paddingTop: '1em',
    width: '100%',
  },
  bmOverlay: {
    top: 0,
    left: 0,
    background: theme.colors.fade.black[70],
  },
};

class Header extends PureComponent {
  state = {
    isOpen: false,
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  handleStateChange = ({ isOpen }) => this.setState({ isOpen })

  renderLink = ({ label, ...a }, index) => (
    <Link
      key={index}
      color={['white', null, 'gray']}
      f={['1em', null, '0.875em']}
      my={['1em', null, 0]}
      {...a}
    >{label}</Link>);

  render() {
    const { browser } = this.props;
    const { isOpen } = this.state;
    const isDesktop = browser.greaterThan.sm;
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
        <Link to="/">
        <Logo w={175} color="cyan" />
        </Link>
        <Box flex={1} />
        {isDesktop && (
          <Flex align="center">
            {links.reduce((seprated, link, index) => {
              const ele = this.renderLink(link, index);
              if (index === 0) return seprated.concat(ele);
              return seprated.concat([<Text mx="0.75em" key={`${index}-sep`} color="gray">|</Text>, ele]);
            }, [])}
          </Flex>
        )}
        <Flex align="center" pl="1em">
          <Button.icon
            is={Link}
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            mr="0.5em"
            w="2em"
          ><Fb /></Button.icon>
          <Button.icon
            w="2em"
            is={Link}
            href={`https://social-plugins.line.me/lineit/share?url=${url}`}
          ><Line /></Button.icon>
        </Flex>
        {!isDesktop && (
          <div>
            <Box
              is={isOpen ? Close : Bars}
              position="relative"
              color={isOpen ? 'white' : 'cyan'}
              f="1.75em"
              ml="0.5em"
              onClick={this.toggleOpen}
              zIndex={9999}
            />
            <Menu
              right
              isOpen={isOpen}
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
