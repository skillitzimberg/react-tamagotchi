import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

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
      <TicketList/>
    </div>
  );
}

export default App;
