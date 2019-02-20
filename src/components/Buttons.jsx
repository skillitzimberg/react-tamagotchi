import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Buttons(props){

  function disableButton() {
    document.getElementById('test-button').disabled = true;
    setTimeout(()=> {
      document.getElementById('test-button').disabled = false;
    }, 3000);
  }

  return (
    <div>
      <h3>{props.message}</h3>
      <button id='test-button' onClick={ () => {disableButton() }}>Nap</button>
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
