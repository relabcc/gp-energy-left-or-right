import 'babel-polyfill';
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux';

import ThemeProvider from '../components/ThemeProvider';
import configureStore from '../configureStore';
import config from '../../gatsby-config';

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <meta name="og:image" content={'https:' + config.siteMetadata.remote + '/og-image.jpg'} />
    </Helmet>
    <Provider store={configureStore()}>
      <ThemeProvider>
        {children()}
      </ThemeProvider>
    </Provider>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
