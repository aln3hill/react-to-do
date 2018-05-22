import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {


  render() {
    return (
      <div className="App">
      <p>Hello hello</p>
      <ul>
        <ToDo />
        <ToDo />
      </ul>
      </div>
    );
  }
}

export default App;
