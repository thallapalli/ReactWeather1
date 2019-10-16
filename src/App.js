import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
state = {
  persons: [
    {name:'YYYY', age:32},
    {name:'GGGG', age:35},
    {name:'HHHH', age:37}
  ]
}

changeNameHandler = () => {
 console.log('button Clicked');

}



  render() {
    return (
      <div className="App">
       <h1>My React Complete Guide</h1>
       <p>Building new is App is FUN</p>
       <button onClick={this.changeNameHandler}>Change Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Cricketer</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>retired Cricketer</Person>
      </div>
    );
  }
}

export default App;
