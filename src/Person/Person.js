import React from 'react';

import Person from './Person.css';

const person = (props) => {
    return (
        <div className="Person">
        <p onClick={props.click}>My Name is {props.name} and my age is {props.age} ...</p>
        <p>{props.children}</p>
        <input text="enterName" onChange={props.change} value={props.name}/>
        </div>
    );    
}

export default person;