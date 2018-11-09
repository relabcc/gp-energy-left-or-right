import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import MdClose from 'react-icons/lib/md/close';

import Box from '../../../components/Box';
import Circle from '../../../components/Circle';
import Modal from '../../../components/Modal';

import ThinkPage from '../../ThinkPage';

import withResponsive from '../../../hoc/withResponsive';
import FreezeScroll from '../../../utils/FreezeScroll';

const freezer = new FreezeScroll();

class MimicModal extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        this.freeze();
      } else {
        this.unfreeze();
      }
    }
  }
  componentWillUnmount() {
    if (this.isFreeze) this.unfreeze();
  }

  freeze = () => {
    freezer.freeze();
    this.isFreeze = true;
  }

  unfreeze = () => {
    freezer.unfreeze();
    this.isFreeze = false;
  }

  render() {
    const { isOpen, children } = this.props;
    return isOpen ? (
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="white"
        overflow="auto"
        zIndex={9999}
      >
        {children}
      </Box>
    ) : null;
  }
}

const OpenModal = ({ browser, onClose, sceneId, ...props }) => {
  const content = (
    <div>
      <Box position="fixed" zIndex={1} right="3%" top="3%" onClick={onClose}>
        <Circle
          border="1px solid black"
          w="3rem"
          f="1.5em"
        >
          <MdClose />
        </Circle>
      </Box>
      <ThinkPage pathContext={{ id: sceneId + 1 }} noHeader noEmail />
    </div>
  );
  return createElement(browser.lessThan.md ? MimicModal : Modal, props, content);
};

OpenModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default withResponsive(OpenModal);
