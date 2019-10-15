import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>My React Complete Guide</h1>
       <p>Add new para. It must Surround with 1 div element</p>
       <Person/>
      </div>
    );
  }
}

export default App;
