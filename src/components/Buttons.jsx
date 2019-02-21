import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Buttons(props){

  return (
    <div>
      <h3>{props.message}</h3>

      <div draggable="true" id="feed">Feed</div>

    </div>
  );
}

Buttons.propTypes = {
  message: PropTypes.string
};

export default Buttons;
