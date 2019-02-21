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

  function triggeredEvent() {
    console.log("trigger!");
  }

  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      // console.log("Huv'rin'")
      event.preventDefault();

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      event.stopPropagation();
      console.log('drop event')
      // move dragged elem to the selected drop target
      if ( event.target.id === "tommy-circle" ) {
        props.onFeed()
      }

  }, false);

  return (
    <div>
      <h3>{props.message}</h3>
      <button id='test-button' onClick={ () => {props.onSleep() }}>Nap</button>

      <button draggable="true">Feed</button>

      <button onClick={() => {props.onPlay()}}>Play</button>
      <Button />
    </div>
  );
}

Buttons.propTypes = {
  message: PropTypes.string
};

export default Buttons;
