import React from 'react';
import shuffle from 'lodash/shuffle';
import range from 'lodash/range';
import chunk from 'lodash/chunk';
import { List } from 'immutable';
import ReactGA from 'react-ga';

import OpenModal from './OpenModal';

import Box from '../../components/Box';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import BackgroundImage from '../../components/BackgroundImage';
import theme from '../../components/ThemeProvider/theme';

import scenes from '../../scenes';
import covers from '../../scenes/covers';
import pics from '../../scenes/pics';
import { WithHover } from '../../hoc/withHover';

const Story = ({ isHovered, src, index, ...props }) => (
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
        left="10%"
        right="10%"
        color="cyan"
        transform="translateY(-20%)"
        textAlign="center"
      >
        <Text f="5em" mb="1.5rem">Q</Text>
        <Text color="white">{scenes[index].title}</Text>
      </Box>
    </Box>
  </Box>
);

const StorywithHover = WithHover(Story);

class StoriesGrid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.scenes = shuffle(range(covers.length));
  }

  componentDidMount() {
    chunk(this.scenes).reduce((allTasks, batch) => allTasks.then(() => Promise.all(batch.map(this.loadImages))), Promise.resolve());
  }

  state = {
    isOpen: false,
    loadedCovers: new List(),
  }

  loadImages = (index) => {
    const cover = covers[index];
    const pic = pics[index];
    return Promise.all([
      this.loadImage(cover, () => this.setState(({ loadedCovers }) => ({ loadedCovers: loadedCovers.set(index, cover) }))),
      this.loadImage(pic),
    ]);
  }

  loadImage = (src, callback) => new Promise((res) => {
    const image = new Image();
    image.onload = () => {
      if (callback) callback();
      res();
    };
    image.src = src;
  })

  handleOpen = (id) => {
    ReactGA.event({
      action: 'Click',
      category: '想一想',
      label: scenes[id].title,
    });
    this.setState({ isOpen: true, id });
  }

  handleClose = () => this.setState({ isOpen: false });

  render() {
    const { isOpen, id, loadedCovers } = this.state;
    return (
      <Container pt={theme.headerHeight}>
        <Flex flexWrap="wrap">
          {this.scenes.map((index) => (
            <Box p="1em" w={[1, null, 1 / 3]} key={index}>
              <StorywithHover src={loadedCovers.get(index)} onClick={() => this.handleOpen(index)} index={index} />
            </Box>
          ))}
          <OpenModal isOpen={isOpen} sceneId={id} onClose={this.handleClose} />
        </Flex>
      </Container>
    );
  }
}

export default StoriesGrid;
