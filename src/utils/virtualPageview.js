import ReactGA from 'react-ga';

export default (pathname, push) => {
  const nextPath = window.location.pathname + '#' + pathname;
  window.history[push ? 'pushState' : 'replaceState'](null, null, nextPath);
  ReactGA.pageview(nextPath);
}
