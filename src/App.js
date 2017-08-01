import React, { Component } from 'react';
import Hogwarts from './components/Hogwarts/Hogwarts'
import Houses from './components/Houses/Houses'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hogwarts />
        <Houses />
      </div>
     
     
    );
  }
}

export default App;
