import React, { Component } from 'react';
import TicketsPage from './tickets-page/tickets-page.container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TicketsPage/>
      </div>
    );
  }
}

export default App;
