import React, {useState} from 'react';
import './App.css';




function App() {

  const [tasks,setTasks] =useState(
    ["Sleep", "Walk Dog", "Make Dinner"])

  const[newTask, setNewTask] = useState("")

  
  const taskNodes = tasks.map((task, index) => {
    return(
      <li key ={index}>{task}</li>
    )
  }) 

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }


  const saveNewTask = (event) =>{
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push(newTask)
    setTasks(copyTasks)
    setNewTask("")

  }






  return (
    <div className="App">

      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task"> Add a new task:</label>
        <input id="new-task" type="text" value={newTask} onChange = {handleTaskInput}/>
        <input type="submit" value="Save New Task" />

      </form>

    </div>
   
  );
}

export default App;
