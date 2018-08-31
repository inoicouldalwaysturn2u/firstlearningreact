import PropTypes from 'prop-types';
import React from 'react';

const Option = ( props ) => (
  <div className="option">
    <p className="option__text">{ props.count }. { props.optionText }</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption( props.optionText );
      }}
    >
      remove
    </button>
  </div>
);

Option.propTypes = {
  count: PropTypes.number,
  optionText: PropTypes.string,
  // just does setState...
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Option;
