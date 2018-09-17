import React from 'react';
import PropTypes from 'prop-types';
import MdClose from 'react-icons/lib/md/close';

import Box from '../../../components/Box';
import Flex from '../../../components/Flex';
import Text from '../../../components/Text';
import Link from '../../../components/Link';
import Circle from '../../../components/Circle';
import Modal from '../../../components/Modal';
import Border from '../../../components/Border';
import BackgroundImage from '../../../components/BackgroundImage';

import Transform from './TransformSvg';
import Myth from './MythSvg';
import Info from './InfoSvg';
import Clue from './ClueSvg';

import heart from './heart.svg';

const linkPics = [
  {
    Pic: Transform,
    to: '/',
  },
  {
    Pic: Myth,
    to: '/',
  },
  {
    Pic: Info,
    to: '/',
  },
  {
    Pic: Clue,
    to: '/',
  },
];

const OpenModal = ({ isOpen, onRequestClose, ...props }) => (
  <Modal
    isOpen={isOpen}
    position="relative"
    onRequestClose={onRequestClose}
    {...props}
  >
    <Box position="absolute" right="3%" top="3%">
      <Circle
        border="1px solid"
        w="3rem"
        f="1.5em"
        onClick={onRequestClose}
      >
        <MdClose />
      </Circle>
    </Box>
    <Flex mx="10%" mt="5em" justifyContent="center">
      <Box w="5em">
        <BackgroundImage src={heart} ratio={1} />
      </Box>
      <Box color="cyan" f="1.2em" ml="1.2em" my="auto">
        <Text>感謝你的填答，也謝謝你願意為能源轉型踏出第一步</Text>
        <Text>如果你的腳還不痠，可以試著了解更多關於能源轉型計畫哦！</Text>
      </Box>
    </Flex>
    <Border mx="10%" my="1em" border="2px solid" borderColor="cyan" />
    <Text my="1.5em" align="center" f="1.2em" color="gray" fontWeight="bold">我還想知道...</Text>
    <Flex w="80%" mx="auto" mb="5em">
      {linkPics.map(({ Pic, ...a }, index) => (
        <Link mx="1em" fontWeight="thin" {...a} key={index}>
          <Pic />
        </Link>
      ))}
    </Flex>
  </Modal>
);

OpenModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default OpenModal;
