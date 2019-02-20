import React from 'react';
import PropTypes from 'prop-types';

function Screen(props){
  return (
    <div className='wrapper'>
      <style jsx>{`
        .wrapper {
          height: 20vh;
          width: 50vw;
          border: 2px solid green;
          text-align: center;
        }

      `}
      </style>
      <h3>{props.message}</h3>
      <h2>Sleep: {props.parentState.sleep}</h2>
      <h2>Hunger: {props.parentState.hunger}</h2>
      <h2>Play: {props.parentState.play}</h2>
    </div>
  );
}

Screen.propTypes = {
  message: PropTypes.string
};

export default Screen;
