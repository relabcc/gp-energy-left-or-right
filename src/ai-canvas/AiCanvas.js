import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import round from 'lodash/round';

import Box from '../components/Box';

class AiCanvas extends PureComponent {
  componentWillReceiveProps({ windowWidth }) {
    if (windowWidth && this.props.onInited && !this.inited) {
      this.props.onInited();
      this.inited = true;
    }
  }

  render() {
    const {
      ratio,
      layers,
      canvasWidth,
      windowWidth,
      animating,
      onInited,
      ...props
    } = this.props;
    return (
      <Box
        position="relative"
        overflow="hidden"
        style={{ fontSize: `${round(windowWidth / canvasWidth, 2)}px`, paddingBottom: `${ratio * 100}%` }}
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
  windowWidth: PropTypes.number,
  onInited: PropTypes.func,
};

export default AiCanvas;
