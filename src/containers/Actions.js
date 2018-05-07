import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { withContentRect } from 'react-measure';

import Box from '../components/Box';
import Grain from '../components/Backgrounds/Grain';
import Actions from '../ai-canvas/Actions';
import ActionsMobile from '../ai-canvas/ActionsMobile';
import withResponsive from '../hoc/withResponsive'

class ScrollableAction extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }

  render() {
    const {
      measureRef,
      contentRect: { bounds: { height } },
      browser,
    } = this.props;
    const isMobile = browser.lessThan.md;

    return (
      <Box position="relative" bg="blue" height={height || '100%'}>
        {isMobile ? <ActionsMobile innerRef={measureRef} /> : <Actions innerRef={measureRef} />}
        <Grain />
      </Box>
    );
  }
}

export default compose(
  withResponsive,
  withContentRect('bounds')
)(ScrollableAction);
