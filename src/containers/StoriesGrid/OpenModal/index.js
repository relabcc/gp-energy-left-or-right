import React from 'react';
import PropTypes from 'prop-types';
import MdClose from 'react-icons/lib/md/close';

import Box from '../../../components/Box';
import Circle from '../../../components/Circle';
import Modal from '../../../components/Modal';

import ThinkPage from '../../ThinkPage';

class OpenModal extends React.PureComponent {
  state = {}

  render() {
    const { onClick, isOpen, ...props } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        position="relative"
        {...props}
      >
        <Box position="absolute" right="3%" top="3%" onClick={onClick}>
          <Circle
            border="1px solid black"
            w="3rem"
            f="1.5em"
          >
            <MdClose />
          </Circle>
        </Box>
        <ThinkPage pathContext={{ id: 1 }} noHeader noEmail />
      </Modal>
    );
  }
}

OpenModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default OpenModal;
