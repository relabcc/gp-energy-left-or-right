import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withContentRect } from 'react-measure';

import Box from '../Box';
import Button from '../Button';
import Text from '../Text';
import BackgroundImage from '../BackgroundImage';
import ActionButtonSVG from '../SVG/ActionButtonMobile';

import bubble from './bubble.svg';

class ActionButtonMobile extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }

  render() {
    const {
      href,
      onClick,
      target,
      title,
      children,
      measureRef,
      measure,
      contentRect: { bounds: { width } },
      ...props
    } = this.props;
    return (
      <Box {...props}>
        <Box px="7%" pt="16%">
          <Button.plain
            position="relative"
            align="center"
            display="block"
            href={href}
            onClick={onClick}
            target={target}
            is="a"
            innerRef={measureRef}
            f={(width / 135) * 9}
            color="orange"
            hoverColor="white"
            hoverBg="none"
          >
            <ActionButtonSVG />
            <Box position="absolute" top="42%" left="50%" transform="translate(-50%, -50%)">
              <Text whiteSpace="pre" color="text" align="center">
                {children}
              </Text>
            </Box>
            <Box
              position="absolute"
              top="0"
              left="57%"
              w="53%"
              transform="translateY(-50%)"
            >
              <BackgroundImage
                ratio={48.1 / 64.6}
                src={bubble}
                f="1em"
              >
                <Box position="absolute" top="44%" left="50%" transform="translate(-50%, -50%)">
                  <Text whiteSpace="pre" color="text" align="center">
                    {title}
                  </Text>
                </Box>
              </BackgroundImage>
            </Box>
          </Button.plain>
        </Box>
      </Box>
    );
  }
}

ActionButtonMobile.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default withContentRect('bounds')(ActionButtonMobile);
