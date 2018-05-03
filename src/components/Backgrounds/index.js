import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import clamp from 'lodash/clamp';

import Box from '../Box';
import EnergyHandle from '../EnergyHandle';
import NewBg from './NewBg';
import OldBg from './OldBg';
import Hammer from '../../vendor/hammer';

const isBrowser = typeof window !== 'undefined';

class TwoBackgrounds extends PureComponent {
  state = {
    dimensions: {
      width: -1,
      height: -1
    },
    ratio: this.props.ratio,
  }

  componentDidMount() {
    if (isBrowser) {
      this.hammertime = new Hammer(this.handle);
      this.hammertime.on('pan', this.handleOnDrag);
    }
  }

  componentWillReceiveProps({ ratio }) {
    if (ratio !== this.props.ratio) this.setState({ ratio });
  }

  componentWillUnmount() {
    if (isBrowser) this.hammertime.destroy();
  }

  handleRef = (ref) => {
    this.handle = ref;
  }

  handleOnDrag = (evt) => {
    const { onRatioChange } = this.props;
    const newRatio = clamp(evt.srcEvent.clientX / this.state.dimensions.width, 0, 1);
    if (onRatioChange) {
      onRatioChange(newRatio);
    } else {
      this.setState({ ratio: newRatio });
    }
  }

  render() {
    const { onDrag, ratio, leftContent, rightContent, onRatioChange, ...props } = this.props;
    const { width } = this.state.dimensions;
    const leftPos = `${this.state.ratio * 100}%`;
    return (
      <Box position="relative" height="100%" {...props}>
        <Measure
          bounds
          onResize={(contentRect) => {
            this.setState({ dimensions: contentRect.bounds })
          }}
        >
          {({ measureRef }) => (
            <Box height="100%" innerRef={measureRef}>
              <OldBg>{leftContent}</OldBg>
              <Box top="0" left="0" bottom="0" style={{ width: leftPos }} position="absolute" overflow="hidden">
                <Box w={width} height="100%">
                  <NewBg>
                    {rightContent}
                  </NewBg>
                </Box>
              </Box>
            </Box>
          )}
        </Measure>
        <EnergyHandle
          position="absolute"
          bottom="15%"
          transform="translate(-50%, 50%)"
          innerRef={this.handleRef}
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
};

TwoBackgrounds.defaultProps = {
  ratio: 0.5,
};

export default TwoBackgrounds;
