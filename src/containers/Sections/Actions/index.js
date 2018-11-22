import React, { PureComponent } from 'react';

import Link from '../../../components/Link';
import Box from '../../../components/Box';
import Flex from '../../../components/Flex';
import ActionButton from '../../../components/ActionButton';
import ActionButtonMobile from '../../../components/ActionButtonMobile';
import Grain from '../../../components/Backgrounds/Grain';
import EmbedSVG from '../../../components/EmbedSVG';
import Actions from './actions-dt.svg';
import ActionsMobile from './actions-mb.svg';

import { actionLinks } from '../../../text';

export const ratio = {
  mobile: 610 / 375,
  desktop: 1200 / 1334,
};

class ScrollableAction extends PureComponent {
  render() {
    const {
      isMobile,
      loaded,
      animating,
      windowWidth,
      ...props
    } = this.props;
    const src = isMobile ? ActionsMobile : Actions;
    const Button = isMobile ? ActionButtonMobile : ActionButton;

    return (
      <Box position="relative">
        <EmbedSVG src={src} ratio={ratio[isMobile ? 'mobile' : 'desktop']} {...props} />
        <Flex
          position="absolute"
          left={['10%', null, '17.5%']}
          right={['10%', null, '17.5%']}
          top={['65%', null, '78%']}
          justify="space-around"
          flexWrap="wrap"
        >
          {actionLinks.map(({ label, title, ...a }, index) => (
            <Box
              key={index}
              my="0.5em"
              w={[1 / 2, null, 1 / 4]}
            >
              <Link w={1} {...a}>
                <Button title={title}>
                  {label}
                </Button>
              </Link>
            </Box>
          ))}
        </Flex>
        <Grain />
      </Box>
    );
  }
}

export default ScrollableAction;
