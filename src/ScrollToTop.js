import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ReactGA from 'react-ga';

class ScrollToTop extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-58674730-16');
    ReactGA.pageview(window.location.pathname + '#' + this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
      ReactGA.pageview(window.location.pathname + '#' + location.pathname);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
