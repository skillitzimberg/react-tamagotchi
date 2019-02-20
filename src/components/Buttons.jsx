import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Buttons(props){




  return (
    <div>
      <h3>{props.message}</h3>
      <button onClick={() => {props.onSleep()}}>Nap</button>
      <button onClick={() => {props.onFeed()}}>Feed</button>
      <button onClick={() => {props.onPlay()}}>Play</button>
      <Button />
    </div>
  );
}

Buttons.propTypes = {
  message: PropTypes.string
};

export default Buttons;
