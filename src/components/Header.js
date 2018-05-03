import React from 'react';

import theme from './ThemeProvider/theme';
import Box from './Box';
import Flex from './Flex';
import Link from './Link';
import Text from './Text';
import Button from './Button';
import Logo from './SVG/Logo';
import Fb from './SVG/Fb';
import Line from './SVG/Line';

const links = [
  { label: '連署支持', link: '#' },
  { label: '能源傳送門', link: '#' },
  { label: '迷思懶人包', link: '#' },
  { label: '21道微想題', link: '#' },
];

const Header = (props) => {
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
      <Flex align="center">
        {links.reduce((seprated, { label, link }, index) => {
          const ele = <Link key={index} href={link} color="gray" f="0.875em">{label}</Link>;
          if (index === 0) return seprated.concat(ele);
          return seprated.concat([<Text mx="0.75em" color="gray">|</Text>, ele]);
        }, [])}
      </Flex>
      <Flex align="center" pl="1em">
        <Button.icon mr="0.5em" w="2em"><Fb /></Button.icon>
        <Button.icon w="2em"><Line /></Button.icon>
      </Flex>
    </Flex>
  );
}

export default Header;
