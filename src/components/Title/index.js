import React, { PureComponent } from 'react';
import { withContentRect  } from 'react-measure';
import PropTypes from 'prop-types';

import Box from '../Box';
import Text from '../Text';
import BackgroundImage from '../BackgroundImage';
import plate from './title-plate.svg';

class Title extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }

  render() {
    const {
      children,
      measureRef,
      measure,
      contentRect: { bounds: { width } },
      active,
      ...props
    } = this.props;

    return (
      <Box
        position="fixed"
        top={0}
        left="37.5%"
        right="37.5%"
        transform={`translateY(${active ? 0 : '-100%'})`}
        transition="transform 0.5s"
        {...props}
      >
        {children && <BackgroundImage innerRef={measureRef} ratio={145.36 / 325.28} src={plate} />}
        <Box position="absolute" bottom="0.5em" w={1} align="center" f={27 / 326 * width}>
          <Text.h2 f="1em">{children}</Text.h2>
        </Box>
      </Box>
    );
  }
}

Title.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
};

Title.defaultProps = {
  active: true,
};

export default withContentRect('bounds')(Title);
