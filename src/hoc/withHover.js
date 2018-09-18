import { Component } from 'react';
import { h } from 'react-hyperscript-helpers';

export function WithHover(WrappedComponent) {
  return class extends Component {
    state = {
      isHovered: false,
    }

    onMouseEnter = () => {
      this.setState({ isHovered: true });
    }

    onMouseLeave = () => {
      this.setState({ isHovered: false });
    }

    render() {
      return h(WrappedComponent, {
        ...this.props,
        isHovered: this.state.isHovered,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
      });
    }
  };
}
