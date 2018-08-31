import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';

const title = 'Selected Option';

const OptionModal = ( props ) => (
  
  <Modal
    isOpen={ !!props.selectedOption }
    onRequestClose={ props.flipSelectedOption }
    contentLabel={ title }
    closeTimeoutMS={ 200 }
    className="modal"
  >

    <h3 
      className="modal__title">
      Selected Option
    </h3>

    { props.selectedOption &&
     <p className="modal__body">{ props.selectedOption }</p> }

    <button
      className="button"
      onClick={props.flipSelectedOption }>Okay</button>

  </Modal>
);

OptionModal.propTypes = {
  selectedOption: PropTypes.string,
  flipSelectedOption: PropTypes.boolean
};

export default OptionModal;
