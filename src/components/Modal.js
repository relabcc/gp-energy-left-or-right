import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import FreezeScroll from '../utils/FreezeScroll';

if (typeof window !== 'undefined') {
  ReactModal.setAppElement('#___gatsby');
}

const freezer = new FreezeScroll();

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 99,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
    overflow: 'auto',
    maxHeight: '100vh',
    borderRadius: '0',
  },
};

export default class Modal extends PureComponent {
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

  handleRef = (ref) => {
    if (ref) {
      this.modalEle = ref.node;
    }
  }

  render() {
    return (
      <ReactModal
        style={customStyles}
        // shouldCloseOnOverlayClick={false}
        // shouldCloseOnEsc={false}
        ref={this.handleRef}
        {...this.props}
      />
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
};
