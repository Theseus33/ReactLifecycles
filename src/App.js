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
        <GithubUserInfo username='sophiebits' />
        <GithubUserInfo username='Theseus33' />
      </div>
    );
  }
}

export default App;
