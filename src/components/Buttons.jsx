import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props){

  return (
    <div>
      <h3>{props.message}</h3>
      <Button />
    </div>
  );
}

Buttons.propTypes = {
  message: PropTypes.string
};

export default Buttons;
