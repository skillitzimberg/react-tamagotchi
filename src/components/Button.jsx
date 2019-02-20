import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {

  return (
    <div>
      <h3>{props.message}</h3>
    </div>
  );
}


Button.propTypes = {
  message: PropTypes.string
};

export default Button;
