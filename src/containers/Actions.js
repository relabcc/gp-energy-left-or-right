import React, { PureComponent } from 'react';
import { withContentRect } from 'react-measure';

import Box from '../components/Box';
import Grain from '../components/Backgrounds/Grain';
import Actions from '../ai-canvas/Actions';

class ScrollableAction extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }

  render() {
    const {
      measureRef,
      contentRect: { bounds: { height } }
    } = this.props;
    return (
      <Box position="relative" bg="blue" height={height || '100%'}>
        <Actions innerRef={measureRef} />
        <Grain />
      </Box>
    );
  }
}

export default withContentRect('bounds')(ScrollableAction);
