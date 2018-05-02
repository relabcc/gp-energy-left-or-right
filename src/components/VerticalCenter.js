import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure'

import Box from './Box';

class VerticalCenter extends PureComponent {
  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  }

  render() {
    const {
      children,
      ...props
    } = this.props;
    const { dimensions: { height } } = this.state;
    const shouldCenter = typeof window !== 'undefined' && window.innerHeight > height - 1;
    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({ dimensions: contentRect.bounds })
        }}
      >
        {({ measureRef }) => (
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
        )}
      </Measure>
    );
  }
}

VerticalCenter.propTypes = {
  children: PropTypes.node,
};

export default VerticalCenter;
