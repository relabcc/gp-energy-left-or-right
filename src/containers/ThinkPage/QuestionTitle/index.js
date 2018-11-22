import React from 'react';

import Flex from '../../../components/Flex';
import Box from '../../../components/Box';
import Border from '../../../components/Border';
import BackgroundImage from '../../../components/BackgroundImage';
import Text from '../../../components/Text';

import q from './Q.svg';

const QuestionTitle = ({ scene }) => (
  <div>
    <Flex align="left">
      <Box w={['4em', null, '3.75em']}>
        <BackgroundImage src={q} />
      </Box>
      <Box flex={1} pl="1.25em">
        <Text.h2 f="1.75em" color="cyan">{scene.title}</Text.h2>
        <Box f="1.25em" my="0.25rem">{scene.sub}的時候想一想</Box>
      </Box>
    </Flex>
    <Border mt="0.5em" borderBottom="2px solid" borderColor="cyan" />
  </div>
);

export default QuestionTitle;
