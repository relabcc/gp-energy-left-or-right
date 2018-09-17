import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withContentRect } from 'react-measure';

import Box from '../Box';
import Button from '../Button';
import Text from '../Text';
import BackgroundImage from '../BackgroundImage';
import ActionButtonSVG from '../SVG/ActionButton';

import bubble from './button-bubble-1.svg';

class ActionButton extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }

  render() {
    const {
      title,
      children,
      measureRef,
      measure,
      contentRect: { bounds: { width } },
      ...props
    } = this.props;
    return (
      <Box {...props}>
        <Box px="15%" pt="30%">
          <Button.plain
            position="relative"
            align="center"
            display="block"
            innerRef={measureRef}
            f={(width / 135) * 15}
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
              top="-35%"
              left="30%"
              w="90%"
            >
              <BackgroundImage
                ratio={91.5 / 122.9}
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

ActionButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default withContentRect('bounds')(ActionButton);
