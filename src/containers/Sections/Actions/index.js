import React, { PureComponent } from 'react';
import { withContentRect } from 'react-measure';

import Box from '../../../components/Box';
import Flex from '../../../components/Flex';
import ActionButton from '../../../components/ActionButton';
import ActionButtonMobile from '../../../components/ActionButtonMobile';
import Grain from '../../../components/Backgrounds/Grain';
import EmbedSVG from '../../../components/EmbedSVG';
import Actions from './actions-dt.svg';
import ActionsMobile from './actions-mb.svg';

import { actionLinks } from '../../../text';

const ratio = {
  mobile: 610 / 375,
  desktop: 1200 / 1334,
};

class ScrollableAction extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }

  render() {
    const {
      measure,
      measureRef,
      contentRect: { bounds: { height } },
      isMobile,
      loaded,
      animating,
      windowWidth,
      ...props,
    } = this.props;
    const src = isMobile ? ActionsMobile : Actions;
    const Button = isMobile ? ActionButtonMobile : ActionButton;

    return (
      <Box position="relative" height={height || '100%'}>
        <EmbedSVG innerRef={measureRef} src={src} ratio={ratio[isMobile ? 'mobile' : 'desktop']} {...props} />
        <Flex
          position="absolute"
          left={['10%', null, '17.5%']}
          right={['10%', null, '17.5%']}
          top={['65%', null, '78%']}
          flexWrap="wrap"
        >
          {actionLinks.map(({ label, link, title }, index) => (
            <Button
              w={[1 / 2, null, 1 / 4]}
              href={link}
              title={title}
              target="_blank"
              key={index}
              my="0.5em"
            >
              {label}
            </Button>
          ))}
        </Flex>
        <Grain />
      </Box>
    );
  }
}

export default withContentRect('bounds')(ScrollableAction);
