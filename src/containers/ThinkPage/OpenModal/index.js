import React from 'react';
import PropTypes from 'prop-types';
// import MdClose from 'react-icons/lib/md/close';

import Flex from '../../../components/Flex';
import Text from '../../../components/Text';
import Link from '../../../components/Link';
// import Circle from '../../../components/Circle';
import Modal from '../../../components/Modal';
import Border from '../../../components/Border';

import Transform from './TransformSvg';
import Myth from './MythSvg';
import Info from './InfoSvg';
import Clue from './ClueSvg';

import Thanks from './Thanks';

const linkPics = [
  {
    Pic: Transform,
    href: '/',
  },
  {
    Pic: Myth,
    href: '/myth',
  },
  {
    Pic: Info,
    href: 'https://relabcc.github.io/gp-monopoly/',
  },
  {
    Pic: Clue,
  },
];

const OpenModal = ({ isOpen, ...props }) => (
  <Modal
    isOpen={isOpen}
    position="relative"
    {...props}
  >
    {/* <Box position="absolute" right="3%" top="3%">
      <Circle
        border="1px solid"
        w="3rem"
        f="1.5em"
        onClick={onRequestClose}
      >
        <MdClose />
      </Circle>
    </Box> */}
    <Thanks />
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
