import { useState } from 'react'
import './App.css';

function App() {

//Todo List
const [todolist,setTodoList]=useState([]);
const [newtask,setTask]=useState("");
const addTask=()=>
{
  setTodoList([...todolist,newtask]);
}
const newTask=(event)=>
{
  setTask(event.target.value);
}
const deleteTask=(taskname)=>
{
const nelist=todolist.filter((task)=> task !==taskname);
setTodoList(nelist)
}
return(
<div className='App'>
<div className='AddList'>
  <label>Enter the Task :
<input type="text"  onChange={newTask}/></label>
{ <button onClick={addTask}>Add Task</button>}
</div>
<div className='DisplayList'>
{todolist.map((taskname)=> {return (
  <div>
   <h1>{taskname}</h1>
   <button onClick={()=> deleteTask(taskname)}>Delete Task</button>
   </div>
   )})}

</div>
  </div>
);
}

export default App;

