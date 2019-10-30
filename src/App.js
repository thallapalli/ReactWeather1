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
switchNameHandler = () => {
 //console.log('button Clicked');
 //Cannot Mutate value. DO NOT use this --> this.state.persons[].name = 'HUHU';
 this.setState({
  persons: [
    {name:'BBBB', age:32},
    {name:'GGGG', age:35},
    {name:'HHHH', age:38}
  ]
}
 )
}

// Building version 1 of changeNameHandler this passing value to this function.
changeNameHandler = (event) => {
  console.log('button Clicked');
  //Cannot Mutate value. DO NOT use this --> this.state.persons[].name = 'HUHU';
  this.setState({
   persons: [
     {name: 'BBBB', age:32},
     {name:  event.target.value, age:35},
     {name:'HHHH', age:37}
   ]
 }
  )
 }

  // must have render() as it is class component
         //Change Name Style 2 is not very performing code 
       //also (event) is inside that by default. It wont execute by default.
       //onClick but we can use as bind is not necessary

       // <!--button onClick= {() => this.changeNameHandler('GURU')}>Change Name Style 2</button-->

       // define inline style jsx and attach to specific components.

  render() {

    const buttonStyle = {
      backgroundColor: 'orange',
      font: 'inherit',
      marginBottom: '20px'

    };


    return (
      <div className="App">
      
       <h1>React Guide - Two Way Binding</h1>
  
       <button  style={buttonStyle}  onClick={this.switchNameHandler}>Switch Name</button>

       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      
       <Person name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        change={this.changeNameHandler}>Cricketer</Person>


       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>retired Cricketer</Person>

      </div>
    );
  }
}

export default App;
