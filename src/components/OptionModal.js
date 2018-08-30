import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';

const title = 'Selected Option';

const OptionModal = ( props ) => (
  
  <Modal
    isOpen={ !!props.selectedOption }
    onRequestClose={ props.flipSelectedOption }
    contentLabel={ title }
  >

    <h2>
      { title }
    </h2>

    { props.selectedOption && <p>{ props.selectedOption }</p> }

    <button
      onClick={ props.flipSelectedOption }
    >
      Close
    </button>
  </Modal>
);

OptionModal.propTypes = {
  selectedOption: PropTypes.string
};

export default OptionModal;
