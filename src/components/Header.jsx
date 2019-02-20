import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <div>
      <h3>{props.message}</h3>
    </div>
  );
}

Header.propTypes = {
  message: PropTypes.string
};

export default Header;
