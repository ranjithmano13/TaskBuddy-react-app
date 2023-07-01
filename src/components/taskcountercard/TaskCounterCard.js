import React from 'react'
import './taskcounter.css'
const TaskCounterCard = (props) => {
  return (
    <article className='task-counter'>
        <h1>{props.title}</h1>
        <h2>{props.count}</h2>
    </article>
  )
}

export default TaskCounterCard