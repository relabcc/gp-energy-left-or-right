import React from 'react';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import BackgroundImage from '../../components/BackgroundImage';
import theme from '../../components/ThemeProvider/theme';

import scenes from '../../scenes';
import covers from '../../scenes/Covers';
import { WithHover } from '../../hoc/withHover';

const Story = ({ isHovered, src, ...props }) => (
  <Box overflow="hidden" position="relative" {...props}>
    <BackgroundImage
      src={src}
      transform={`scale(${isHovered ? 1.1 : 1})`}
      ratio={1}
      transition="transform 0.5s"
    />
    <Box
      position="absolute"
      top="0"
      bottom="0"
      left="0"
      right="0"
      bg="rgba(0,0,0,0.7)"
      opacity={+isHovered}
      transition="opacity 0.5s"
    >
      <Box
        position="absolute"
        top="30%"
        left="50%"
        color="cyan"
        transform="translate(-50%, -20%)"
      >
        <Text f="5em" mb="1rem">Q</Text>
        {scenes.map((scene, index) => (
          <Text color="white">{scene.title}</Text>
        ))}
      </Box>
    </Box>
  </Box>
);

const StorywithHover = WithHover(Story);

const StoriesGrid = (props) => (
  <Flex pt={theme.headerHeight} mx="5em" flexWrap="wrap" {...props}>
    {covers.map((cover, index) =>
      <Box p="1em" w={[1, null, 1 / 3]} key={index}>
        <StorywithHover src={cover} />
      </Box>
    )}
  </Flex>
);

export default StoriesGrid;
