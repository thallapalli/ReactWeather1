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
// if you notice the moment this fun called we change name of YYYY and age of HHHH
// changeNameHandler = () => {
//  console.log('button Clicked');
//  //Cannot Mutate value. DO NOT use this --> this.state.persons[].name = 'HUHU';
//  this.setState({
//   persons: [
//     {name:'BBBB', age:32},
//     {name:'GGGG', age:35},
//     {name:'HHHH', age:38}
//   ]
// }
//  )
// }

// Building version 1 of changeNameHandler this passing value to this function.
changeNameHandler = (newName) => {
  console.log('button Clicked');
  //Cannot Mutate value. DO NOT use this --> this.state.persons[].name = 'HUHU';
  this.setState({
   persons: [
     {name: newName, age:32},
     {name:'GGGG', age:35},
     {name:'HHHH', age:38}
   ]
 }
  )
 }

  // must have render() as it is class component
         //Change Name Style 2 is not very performing code 
       //also (event) is inside that by default. It wont execute by default.
       //onClick but we can use as bind is not necessary
  render() {
    return (
      <div className="App">
       <h1>My React Complete Guide</h1>
       <p>Building new is App is FUN</p>

       <button onClick= {() => this.changeNameHandler('GURU')}>Change Name Style 2</button>

       <button onClick={this.changeNameHandler.bind(this,'PRASAD')}>Change Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      
       <Person name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.changeNameHandler.bind(this,'HMS')}>Cricketer</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>retired Cricketer</Person>
      </div>
    );
  }
}

export default App;
