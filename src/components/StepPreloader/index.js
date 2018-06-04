import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Preloader from './Preloader';

class StepPreloader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
    this.total = props.list.length;
  }

  handleOnLoad = () => {
    const { step } = this.state;
    const next = step + 1;
    if (!this.firstLoaded) this.handleFirstLoaded();
    if (next < this.total) {
      this.setState({ step: next });
    } else {
      this.handleAllLoaded();
    }
    const { onLoaded } = this.props;
    if (onLoaded) onLoaded(step);
  }

  handleFirstLoaded = () => {
    this.firstLoaded = true;
    const { onFirstLoaded } = this.props;
    if (onFirstLoaded) onFirstLoaded();
  }

  handleAllLoaded = () => {
    this.setState({ loaded: true });
    const { onAllLoaded } = this.props;
    if (onAllLoaded) onAllLoaded();
  }

  render() {
    const { loaded, step } = this.state;
    if (loaded) return null;
    return <Preloader key={step} images={this.props.list[step]} onLoaded={this.handleOnLoad} />;
  }
}

StepPreloader.propTypes = {
  list: PropTypes.array,
  onFirstLoaded: PropTypes.func,
};

export default StepPreloader;
