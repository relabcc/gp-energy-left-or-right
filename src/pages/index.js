import React from 'react';

import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import BackgroundImage from '../components/BackgroundImage';

const Index = () => (
  <Container>
    <Box my="2em">
      <Text.h1>Styled Gatsby Starter</Text.h1>
      <Text>Styled Components + Styled System is cool!</Text>
    </Box>
    <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
  </Container>
);

export default Index;
