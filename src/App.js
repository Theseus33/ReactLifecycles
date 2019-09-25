import React, { Component } from 'react';
import lDataLoader from "./Dataloader";
import './App.css';
import Timer from './Timer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>TIMER</h1>
        <Timer />
      </div>
    );
  }
}

export default App;
