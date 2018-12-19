import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const buscadores=['http://www.google.com',
                      'http://www.bing.com',
                      'http://www.yahoo.com'];
    return (
      <div>
        <a href={buscadores[0]}>Google</a><br />
        <a href={buscadores[1]}>Bing</a><br />
        <a href={buscadores[2]}>Yahoo</a><br />                
      </div>
    );
  }

}

export default App;
