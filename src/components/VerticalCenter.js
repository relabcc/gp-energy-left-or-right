import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addEventListener } from 'consolidated-events';

import Box from './Box';

class VerticalCenter extends PureComponent {
  state = {
    dimensions: {},
  }

  componentDidMount() {
    this.handleResize();
    this.removeEvents = addEventListener(window, 'resize', this.handleResize);
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  handleResize = () => {
    this.setState({
      dimensions: this.container.getBoundingClientRect(),
    });
  }

  render() {
    const {
      children,
      ...props
    } = this.props;
    const { dimensions: { height } } = this.state;
    const shouldCenter = typeof window !== 'undefined' && window.innerHeight > height - 1;
    return (
      <Box position="relative" height="100%" innerRef={(ref) => { this.container = ref; }} {...props}>
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

export default VerticalCenter;
