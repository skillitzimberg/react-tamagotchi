import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Buttons(props){

  function onDrag(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h3>{props.message}</h3>

      <div
        draggable="true"
        id="feed"
        onDrag={(event) => onDrag(event)}
      >
        Feed
      </div>

    </div>
  );
}

Buttons.propTypes = {
  message: PropTypes.string
};

export default Buttons;
