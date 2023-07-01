import React from "react";
import "./taskdatacounter.css";
import { CalendarCard, TaskCounterCard, Todaytaskcard } from "../../components";
const Taskdatacounter = ({openTasks,closedTasks}) => {
  return (
    <aside className="task-data-counter">
      <CalendarCard/>
      <Todaytaskcard openTasks={openTasks} closedTasks={closedTasks}/>
      <TaskCounterCard title="Upcoming Tasks" count="100"/>
    </aside>
  );
};

export default Taskdatacounter;
