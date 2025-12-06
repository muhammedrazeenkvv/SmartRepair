import React from 'react'

const Todo = () => {
const [task, setTask] = useState("")
const [tasks, setTasks] = useState([])

function handleAddTask() {
    if(task.trim()!=="") {
        setTasks([...tasks,task])
        setTask("")
    
}

function handleDeteleTask(index) {
    const updatedTasks=tasks.filter((item,i)=> i !== index)
    setTasks(updatedTasks)
}
  return (
    <div>
      <h3>to Do List</h3>
      <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
        <button onClick={handleAddTask}>Add</button>
        <ul>
            {tasks.map((item,index)=>(
                <li key={index}>{item} <button onClick={()=>{handleDeteleTask(index)}}>delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
