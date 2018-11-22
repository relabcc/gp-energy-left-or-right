import React from 'react';

import theme from '../components/ThemeProvider/theme';
import Header from '../components/Header';

export default (Page) => {
  const WithHeader = (props) => (
    <div>
      <Header data={props.data} />
      <Page pt={theme.headerHeight} {...props} />
    </div>
  );

  return WithHeader;
};
