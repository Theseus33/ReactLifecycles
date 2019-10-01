import React, { Component } from 'react';
import './App.css';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

class App extends Component {

  render() {
    return (
      <div className="App">
        <GithubUserInfo username='facebook' />
        <GithubUserInfo username='colt' />
      </div>
    );
  }
}

export default App;
