import React from 'react';

import Box from '../../components/Box';
import BackgroundImage from '../../components/BackgroundImage';
import DualBg from '../DualBg';

import oldTw from './intro-tw-old.svg';
import newTw from './intro-tw-new.svg';

const Wrapper = (props) => <Box w="50%" mx="auto" {...props} />

const Intro = () => {
  return (
    <Box height="100%">
      <DualBg
        leftContent={(
          <Wrapper>
            <BackgroundImage src={oldTw} />
          </Wrapper>
        )}
        rightContent={(
          <Wrapper>
            <BackgroundImage src={newTw} />
          </Wrapper>
        )}
      />
    </Box>
  );
};

export default Intro;
