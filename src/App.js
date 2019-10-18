import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';


// imp diff between this and class based state handling.
// Class based state handling will merge the state object 
// and dont override other elements
// Where as Function component state handling via Hooks will not merge.
// This is very importatnt to remember.
// Code sample is below 

const App = props => {

const [personState,setpersonState] = useState ({
    persons: [
      {name:'YYYY', age:32},
      {name:'GGGG', age:35},
      {name:'HHHH', age:37}
    ]
  });

const changeNameHandler = () => {
 console.log('button Clicked');
 //Cannot Mutate value. DO NOT use this --> this.state.persons[].name = 'HUHU';
 setpersonState({
  persons: [
    {name:'BBBB', age:32},
    {name:'GGGG', age:35},
    {name:'HHHH', age:38}
  ]
 });
}

    return (
      <div className="App">
       <h1>My React Complete Guide</h1>
       <p>Building new is App is FUN</p>
       <button onClick={changeNameHandler}>Change Name</button>
       <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
       <Person name={personState.persons[1].name} age={personState.persons[1].age}>Cricketer</Person>
       <Person name={personState.persons[2].name} age={personState.persons[1].age}>retired Cricketer</Person>
      </div>
    );
}

export default App;
