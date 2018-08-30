import PropTypes from 'prop-types';
import React from 'react';

const Header = ( props ) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      { props.subtitle && <h2>{ props.subtitle }</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};
// const { title } = React.PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;