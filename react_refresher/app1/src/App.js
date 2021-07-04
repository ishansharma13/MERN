import './App.css';
import GoalList from './components/GoalList';
function App() {

  const courseGoals = [
    {"id":"cg1","text":"Finish the Course"},
    {"id":"cg2","text":"Get a summary of React"},
    {"id":"cg3","text":"Get a summary of Node.js"},
    {"id":"cg4","text":"Get a summary of express"},
    {"id":"cg5","text":"Get a summary of MongoDB"},
    {"id":"cg6","text":"Get a summary of how to build APIs for frontend"},
    {"id":"cg7","text":"Understand the flow of the app"}
  ];
  return (
    <div className="course-goals">
      <h2> COURSE GOALS</h2>
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
