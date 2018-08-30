import PropTypes from 'prop-types';
import React from 'react';

const Action = ( props ) => {
  return (
    <div>
      <button disabled={ props.buttonState } onClick={ props.handlePick }>What should I do?</button>
    </div>
  );
};

Action.propTypes = {
  buttonState: PropTypes.bool.isRequired,
  handlePick: PropTypes.function
};

export default Action;