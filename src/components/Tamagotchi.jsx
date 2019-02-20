import React from 'react';
import Header from './Header';
import Screen from './Screen';
import Buttons from './Buttons';

function Tamagotchi(props){
  return (
    <div>
      <Header message={'header works'} />
      <Screen message={'screen works'} />
      <Buttons message={'buttons works'} />
    </div>
  );
}

export default Tamagotchi;
