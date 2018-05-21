import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withContentRect  } from 'react-measure';
import clamp from 'lodash/clamp';

import Box from '../Box';
import EnergyHandle from '../EnergyHandle';
import NewBg from './NewBg';
import OldBg from './OldBg';
import Grain from './Grain';
import Hammer from '../../vendor/hammer';

class TwoBackgrounds extends PureComponent {
  state = {
    ratio: this.props.ratio,
  }

  componentDidMount() {
    this.hammertime = new Hammer(this.handle);
    this.hammertime.on('pan', this.handleOnDrag);
    this.props.measure();
  }

  componentWillReceiveProps({ ratio }) {
    if (ratio !== this.props.ratio) this.setState({ ratio });
  }

  componentWillUnmount() {
    this.hammertime.destroy();
  }

  handleRef = (ref) => {
    this.handle = ref;
  }

  handleOnDrag = ({ srcEvent: { pageX } }) => {
    const { onRatioChange, contentRect, ratioSync, firstDragged, showHint } = this.props;
    const newRatio = clamp(pageX / contentRect.bounds.width, 0, 1);
    if (showHint) firstDragged();
    if (ratioSync && onRatioChange) {
      onRatioChange(newRatio);
    } else {
      this.setState({ ratio: newRatio });
    }
  }

  render() {
    const {
      ratio,
      leftContent,
      rightContent,
      onRatioChange,
      measureRef,
      contentRect,
      measure,
      isMobile,
      ratioSync,
      showHint,
      ...props
    } = this.props;
    const leftPos = `${this.state.ratio * 100}%`;

    return (
      <Box position="relative" height="100%" overflow="hidden" innerRef={measureRef} {...props}>
        <Box height="100%">
          <NewBg isMobile={isMobile}>{leftContent}</NewBg>
          <Box
            top="0"
            left="0"
            bottom="0"
            style={{ width: leftPos }}
            position="absolute"
            overflow="hidden"
          >
            <Box w={contentRect.bounds.width} height="100%">
              <OldBg isMobile={isMobile}>
                {rightContent}
              </OldBg>
            </Box>
          </Box>
        </Box>
        <Grain />
        <EnergyHandle
          position="absolute"
          bottom="6em"
          transform="translate(-50%, 0)"
          innerRef={this.handleRef}
          style={{ left: leftPos }}
          showHint={showHint}
        />
      </Box>
    );
  }
}

TwoBackgrounds.propTypes = {
  onRatioChange: PropTypes.func,
  ratio: PropTypes.number,
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
  ratioSync: PropTypes.bool,
  showHint: PropTypes.bool,
};

TwoBackgrounds.defaultProps = {
  ratio: 0.5,
};

export default withContentRect('bounds')(TwoBackgrounds);
