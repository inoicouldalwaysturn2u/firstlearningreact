import PropTypes from 'prop-types';
import React from 'react';

const Option = ( props ) => (
  <div>
    <p>
      {props.optionText}      
      {/* @@Me Q: why is e there? */}
      <button onClick={ ( e ) => {
        props.handleDeleteOption( props.optionText );
      }}
      >
        Remove
      </button>
    </p>
  </div>
);

Option.propTypes = {
  optionText: PropTypes.string,
  // just does setState...
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Option;
