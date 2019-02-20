import React from 'react';
import PropTypes from 'prop-types';

function Screen(props){
  return (
    <div>
      <h3>{props.message}</h3>
    </div>
  );
}

Screen.propTypes = {
  message: PropTypes.string
};

export default Screen;
