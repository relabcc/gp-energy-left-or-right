import { withPrefix } from 'gatsby-link';
import config from '../../gatsby-config';

export default (pathname) => {
  const nextPath = withPrefix(pathname);
  window.history.pushState(null, null, nextPath);
  if (window.gtag) {
    window.gtag('config', config.siteMetadata.gaId, { 'page_path': nextPath });
  }
}
