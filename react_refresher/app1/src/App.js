import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import { useState } from 'react';
function App() {

  const [courseGoals,setNewGoals] = useState([
    {"id":"cg1","text":"Finish the Course"},
    {"id":"cg2","text":"Get a summary of React"},
    {"id":"cg3","text":"Get a summary of Node.js"},
    {"id":"cg4","text":"Get a summary of express"},
    {"id":"cg5","text":"Get a summary of MongoDB"},
    {"id":"cg6","text":"Get a summary of how to build APIs for frontend"},
    {"id":"cg7","text":"Understand the flow of the app"}
  ]);

  const addGoal = (text) => {
    var x = {"id":"cg" + (parseInt(courseGoals[courseGoals.length -1]["id"].split("cg")[1]) +1).toString(),"text":text};
    setNewGoals(courseGoals.concat(x));
    // console.log(courseGoals.length);
  };

  return (
    <div className="course-goals">
      <h2> COURSE GOALS</h2>
      <NewGoal new={addGoal}/>
      <hr/>
      <GoalList goals={courseGoals}/>
      
    </div>
  );
}

export default App;
