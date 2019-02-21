import React from 'react';
import PropTypes from 'prop-types';

function Screen(props){
  let size = (props.parentState.hunger * 10) + 'px';
  let color = 'hsl(' + (props.parentState.sleep * 50) + ', 100%, 50%)';

  let circleStyle = {
    height: size,
    width: size,
    backgroundColor: color
  }

  return (
    <div className='wrapper'>
      <style jsx>{`
        .wrapper {
          height: 20vh;
          width: 50vw;
          border: 2px solid green;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 6fr;
        }

        #stat-bar {
          font-size: 10px;
        }

        #tommy-circle {
          border-radius: 50%;

          border: 1px solid red;
          justify-self: center;
          align-self: center;
        }

      `}
      </style>
      <div id='stat-bar'>
        <h2>Sleep: {props.parentState.sleep}</h2>
        <h2>Hunger: {props.parentState.hunger}</h2>
        <h2>Play: {props.parentState.play}</h2>
      </div>

      <div id='tommy-circle' style={circleStyle}>
      </div>
    </div>
  );
}

Screen.propTypes = {
  message: PropTypes.string
};

export default Screen;
