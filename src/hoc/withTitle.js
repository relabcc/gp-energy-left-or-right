import React from 'react';

import Box from '../components/Box';
import Title from '../components/Title';

export default (Page) => {
  const WithTitle = ({ active, animating, title, ...props }) => title ? (
    <Box position="relative" height="100%">
      <Page {...props} />
      <Title active={!animating}>
      {title}
    </Title>
    </Box>
  ) : <Page {...props} />;

  return WithTitle;
};
