import React, { useState } from 'react'

const TodoList = () => {
    const [task,setTask] = useState("")
    const [tasks,setTasks] = useState([])  

    function handleAddTask() {
        if (task.trim() !=="") {
            setTasks([...tasks,task])
            setTask("")
        }
    }

    function handleDeteleTask(index) {
            const updatedTasks = tasks.filter((item,i)=> i !== index)
            setTasks(updatedTasks)
        }

  return (
    <div>
      <h1>Todo List</h1>

      <input type="text"  value={task} onChange={(e)=>{setTask(e.target.value)}} />

      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((item, index) =>(
            <li key={index}> {item} <button onClick={()=>{handleDeteleTask(index)}}>delete</button></li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
