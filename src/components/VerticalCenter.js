import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withContentRect } from 'react-measure'

import Box from './Box';

class VerticalCenter extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }


  render() {
    const {
      children,
      measure,
      measureRef,
      contentRect: { bounds: { height } },
      ...props
    } = this.props;
    const shouldCenter = typeof window !== 'undefined' && window.innerHeight > height - 1;
    return (
      <Box position="relative" height="100%" innerRef={measureRef} {...props}>
        <Box
          position="absolute"
          top={shouldCenter ? '50%' : 0}
          w={1}
          transform={shouldCenter && 'translateY(-50%)'}
        >
          {children}
        </Box>
      </Box>
    );
  }
}

VerticalCenter.propTypes = {
  children: PropTypes.node,
};

export default withContentRect('bounds')(VerticalCenter);
