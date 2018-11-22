import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Button from '../../components/Button';
import Text from '../../components/Text';
import SideDot from '../../components/SVG/SideDot';

class Step extends PureComponent {
  state = {
    hover: false,
  }

  handleMouseEnter = () => this.setState({ hover: true })
  handleMouseLeave = () => this.setState({ hover: false })

  render() {
    const { hover } = this.state;
    const {
      active,
      title,
      onClick,
      isMobile,
      ...props
    } = this.props;
    return (
      <Box f="0.75em" my="1em" {...props}>
        <Box position="relative" w="1.25em">
          {title && (
            <Box
              position="absolute"
              opacity={+(hover || (active && !isMobile))}
              w="11em"
              py="0.25em"
              bg="white"
              color="orange"
              right="1.75em"
              bottom="0"
              transition="all 0.5s"
              borderRadius="0.5em"
            >
              <Text f="1em" align="center">
                {title}
              </Text>
            </Box>
          )}
          <Button.icon
            onMouseEnter={this.handleMouseEnter}
            onFocus={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onBlur={this.handleMouseLeave}
            onClick={onClick}
            border="none"
            bg="transparent"
            hoverBg="transparent"
          >
            <SideDot color={active ? 'orange' : 'white'} />
          </Button.icon>
        </Box>
      </Box>
    );
  }
}

Step.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
  isMobile: PropTypes.bool,
};

export default Step;
