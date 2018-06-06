import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withContentRect  } from 'react-measure';
import clamp from 'lodash/clamp';
import bowser from 'bowser';

import Box from '../Box';
import EnergyHandle from '../EnergyHandle';
import NewBg from './NewBg';
import OldBg from './OldBg';
import Grain from './Grain';
import Hammer from '../../vendor/hammer';

class TwoBackgrounds extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ratio: this.props.ratio,
    };
    this.isIos = bowser.ios;
    this.iosEdge = 0.05;
  }

  componentDidMount() {
    this.hammertime = new Hammer(this.handle);
    this.hammertime.on('panstart', this.disableSlect);
    this.hammertime.on('panend', this.enableSlect);
    this.hammertime.on('panmove', this.handleOnDrag);
    this.props.measure();
    setTimeout(() => this.setRatio(this.props.ratio));
  }

  componentWillReceiveProps({ ratio }) {
    if (ratio !== this.props.ratio) this.setRatio(ratio);
  }

  componentWillUnmount() {
    this.hammertime.destroy();
  }

  handleRef = (ref) => {
    this.handle = ref;
  }

  handleOnDrag = ({ srcEvent: { pageX } }) => {
    const { contentRect, firstDragged, showHint } = this.props;

    const newRatio = clamp(
      pageX / contentRect.bounds.width,
      this.isIos ? this.iosEdge : 0,
      this.isIos ? (1 - this.iosEdge) : 1
    );
    if (showHint) firstDragged();
    this.setRatio(newRatio);
  }

  disableSlect = () => document.body.classList.add('ratio-dragging')
  enableSlect = () => document.body.classList.remove('ratio-dragging')

  setRatio = (ratio) => {
    const leftPos = this.props.contentRect.bounds.width * ratio + 'px';
    this.upperRef.style.width = leftPos;
    this.handle.style.left = leftPos;
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
      firstDragged,
      ...props
    } = this.props;

    const leftPos = contentRect.bounds.width * this.state.ratio;

    return (
      <Box position="relative" height="100%" overflow="hidden" innerRef={measureRef} {...props}>
        <Box height="100%">
          <NewBg isMobile={isMobile}>{leftContent}</NewBg>
          <Box
            top="0"
            left="0"
            bottom="0"
            position="absolute"
            overflow="hidden"
            style={{ width: leftPos }}
            innerRef={(ref) => { this.upperRef = ref; }}
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
          showHint={showHint}
          style={{ left: leftPos }}
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
