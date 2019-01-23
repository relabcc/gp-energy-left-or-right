import React from 'react';

import BackgroundImage from '../../../components/BackgroundImage';
import Box from '../../../components/Box';
import Flex from '../../../components/Flex';
import Text from '../../../components/Text';
import heart from './heart.svg';

const Thanks = () => {
  return (
    <Flex mx="10%" mt={['3em', null, '5em']} justifyContent="center">
      <Box w="5em">
        <BackgroundImage src={heart} ratio={1} />
      </Box>
      <Box color="cyan" fontSize={['1em', null, '1.2em']} ml="1.2em" my="auto" textAlign="left">
        <Text>感謝你的填答，也謝謝你願意為能源轉型踏出第一步</Text>
        <Text mt="0.5em">如果你的腳還不痠，可以試著了解更多關於能源轉型計畫哦！</Text>
      </Box>
    </Flex>
  );
};

export default Thanks;
