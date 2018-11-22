import 'babel-polyfill';
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'

import { Provider } from 'react-redux';

import ScrollToTop from './ScrollToTop';
import ThemeProvider from './components/ThemeProvider';
import configureStore from './configureStore';

import Home from './pages/index';
import Clues from './pages/clues';
import Myth from './pages/myth';
import Think from './pages/think';

import sections from './sections';

export default () => (
  <Provider store={configureStore()}>
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            {sections.map((path) => (
              <Route key={path} path={`/${path.toLowerCase()}`} component={Home} />
            ))}
            <Route path="/clues" component={Clues} />
            <Route path="/myth/:id?" component={Myth} />
            <Route path="/think/:id?" component={Think} />
          </Switch>
        </ScrollToTop>
      </HashRouter>
    </ThemeProvider>
  </Provider>
);
