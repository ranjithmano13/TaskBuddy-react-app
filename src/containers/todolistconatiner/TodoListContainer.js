import React, { useState } from "react";
import "./todolistcontainer.css";
import { TodoList } from "../../components";
const TodoListContainer = () => {
  const [toDoItem, setToDoItem] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    if (toDoItem !== "") {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          task: toDoItem,
          completed:false
        },
      ]);
      setToDoItem("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(e);
    }
  }

  const inputToDo = (e) => {
    e.preventDefault();
    setToDoItem(e.target.value);
    console.log(toDoItem);
  };


  const removetask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const updateTaskStatus = (passedTask) => {
    setTasks(tasks.map((task)=>{
      if(task.id === passedTask.id){
        task.completed = !task.completed
        return task;
      }
      return task; 
  }))
  }
  return (
    <div className="task-list-section">
      <div className="task-input">
        <input
          placeholder="add Task..."
          value={toDoItem}
          onChange={inputToDo}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" onClick={addTask}>
          Add Task
        </button>
      </div>
      <TodoList tasks={tasks} removetask={removetask} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default TodoListContainer;
