import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../../../components/Flex';
import Text from '../../../components/Text';
import Link from '../../../components/Link';
import Box from '../../../components/Box';
import Modal from '../../../components/Modal';
import Border from '../../../components/Border';
import { thinkLinks } from '../../../text';

import Transform from './TransformSvg';
import Myth from './MythSvg';
import Info from './InfoSvg';
import Clue from './ClueSvg';

import Thanks from './Thanks';

const pics = {
  Transform,
  Myth,
  Info,
  Clue,
};

const linkPics = thinkLinks.map(({ pic, href }) => ({
  Pic: pics[pic],
  href,
}));

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
    <Text my="1.5em" align="center" fontSize={['1em', null, '1.2em']} color="gray" fontWeight="bold">我還想知道...</Text>
    <Flex w="80%" mx="auto" mb={['3em', null, '5em']} flexWrap="wrap">
      {linkPics.map(({ Pic, ...a }, index) => (
        <Box width={[1 / 2, null, 1 / 4]} p="0.5em" key={index}>
          <Link fontWeight="thin" {...a}>
            <Pic />
          </Link>
        </Box>
      ))}
    </Flex>
  </Modal>
);

OpenModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default OpenModal;
