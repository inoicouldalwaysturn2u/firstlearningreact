import PropTypes from 'prop-types';
import React from 'react';

import Option from './Option';

const Options = ( props ) => (
  <div>
    {
      ( props.options.length === 0 ) &&
      <p>
        Sorry, there are no options. Add some if you like!
      </p>
    }

    <button onClick={ props.handleDeleteOptions }>Remove All</button>
    {props.options.map( ( solo, index ) => (
      <Option
        key={ index }
        optionText={ solo }
        handleDeleteOption={ props.handleDeleteOption }
      />
    ))
    }
  </div>
  );

Options.propTypes = {
  options: PropTypes.array.isRequired,
  // just does setState...
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOption: PropTypes.func.isRequired
};

export default Options;
