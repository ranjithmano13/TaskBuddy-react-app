import React from 'react'
import './todolist.css'
const TodoList = ({tasks,updateTaskStatus,removetask}) => {
  return (
    <ul className='task-lists' style={{color:'white'}}>
       {tasks.map((task)=>(
        <li key={task.id}>
          <input type='checkbox' onChange={()=>updateTaskStatus(task)} checked = {task.completed}/>
          
          <h1>{task.task.toUpperCase()}</h1>
          <button type='button' onClick={()=>removetask(task.id)}>Delete</button>
        </li>
       ))}
    </ul>
  )
}

export default TodoList