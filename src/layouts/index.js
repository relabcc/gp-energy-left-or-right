import 'babel-polyfill';
import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux';

import ThemeProvider from '../components/ThemeProvider';
import configureStore from '../configureStore';

const Layout = ({ children }) => (
  <div>
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
