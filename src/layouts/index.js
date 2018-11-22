import 'babel-polyfill';
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Provider } from 'react-redux';

import ThemeProvider from '../components/ThemeProvider';
import configureStore from '../configureStore';

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link rel="apple-touch-icon" sizes="180x180" href={('/apple-touch-icon.png')} />
      <link rel="icon" type="image/png" sizes="32x32" href={('/favicon-32x32.png')} />
      <link rel="icon" type="image/png" sizes="16x16" href={('/favicon-16x16.png')} />
      <link rel="mask-icon" color="#27c1ae" href={('/safari-pinned-tab.svg')} />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
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
