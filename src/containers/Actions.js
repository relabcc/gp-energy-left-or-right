import React, { PureComponent } from 'react';
import { withContentRect } from 'react-measure';

import Box from '../components/Box';
import Grain from '../components/Backgrounds/Grain';
import Actions from '../ai-canvas/Actions';
import ActionsMobile from '../ai-canvas/ActionsMobile';

class ScrollableAction extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }

  render() {
    const {
      measureRef,
      contentRect: { bounds: { height, width } },
      isMobile,
      ...props,
    } = this.props;
    const Canvas = isMobile ? ActionsMobile : Actions;

    return (
      <Box position="relative" bg="blue" height={height || '100%'}>
        <Canvas innerRef={measureRef} windowWidth={width} {...props} />
        <Grain />
      </Box>
    );
  }
}

export default withContentRect('bounds')(ScrollableAction);
