import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style jsx>{`
        div {
          font-family: helvetica;
          padding: 10px;
        }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
    </div>
  );
}

export default App;
