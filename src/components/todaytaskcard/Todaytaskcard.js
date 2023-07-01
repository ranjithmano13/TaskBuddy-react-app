import React from "react";
import "./todaytaskcard.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const Todaytaskcard = ({openTasks,closedTasks}) => {
// const percent = Math.round((closedTasks/openTasks)*100)
  const percent = openTasks === 0 ? 100 : Math.round((closedTasks / openTasks) * 100);

  return (
    <article className="today-task-card">
      <div className="today-task-card-heading">
        <h1>Today's Tasks</h1>
        <div
          className="progress-bar"
          style={{ width: "100px", height: "100px" }}
        >
          <CircularProgressbarWithChildren
            value={percent}
            maxValue={100}
            styles={{
              path: {
                strokeLinecap: "round",
                stroke: "black",
              },
            }}
          >
            <div
              style={{ fontSize: "20px", color: "black", marginTop: "-15px",fontFamily:'var(--font-subhead)',fontWeight:'bold' }}
            >
              {percent} %
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className="today-task-card-body">
        <div>
          <h2>{closedTasks}</h2>
          <h3>Completed</h3>
        </div>
        <div className="today-task-card-body-line"></div>
        <div>
          <h2>{openTasks}</h2>
          <h3>Pending</h3>
        </div>
      </div>
    </article>
  );
};

export default Todaytaskcard;
