import React, { useState } from 'react';
import './NewGoal.css';


const NewGoal = props =>{
    const [entText,setText] = useState('');
    
    const addGoalHandler  = event =>{
        event.preventDefault();
        props.new(entText);
        setText('');
        
    };
    
    const txtHandler = event =>{
        setText(event.target.value);
    };
  
    
//   console.log(entText);  
    
    
      
    return (
        <form className="new-goal" onSubmit = {addGoalHandler}>
            <input type="text" value={entText} onChange={txtHandler}/>
            <button type="submit">Add Goal</button>
        </form>
    );
};

export default NewGoal;