import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Tamagotchi from './Tamagotchi';

function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Tamagotchi} />} />
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default App;
