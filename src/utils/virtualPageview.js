import config from '../../gatsby-config';

export default (pathname) => {
  const nextPath = config.siteMetadata.prefix + pathname;
  window.history.pushState(null, null, nextPath);
  if (window.gtag) {
    window.gtag('config', config.siteMetadata.gaId, { 'page_path': nextPath });
  }
}
