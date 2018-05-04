import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContentRect  } from 'react-measure';

import Box from '../components/Box';

class AiCanvas extends Component {
  componentDidMount() {
    this.props.measure();
  }

  shouldComponentUpdate({ contentRect }) {
    return this.props.contentRect.bounds !== contentRect.bounds;
  }

  render() {
    const {
      ratio,
      layers,
      canvasWidth,
      measureRef,
      measure,
      contentRect,
      ...props
    } = this.props;
    return (
      <Box
        position="relative"
        overflow="hidden"
        pb={`${ratio * 100}%`}
        style={{ fontSize: `${(contentRect.bounds.width / canvasWidth) * 1}px` }}
        innerRef={measureRef }
        {...props}
      >
        {layers.map(({ attr, layer, name }) => (
          <Box position="absolute" {...attr} key={name}>
            {layer}
          </Box>
        ))}
      </Box>
    );
  }
}

AiCanvas.propTypes = {
  layers: PropTypes.array,
  ratio: PropTypes.number,
  canvasWidth: PropTypes.number,
};

export default withContentRect('bounds')(AiCanvas);
