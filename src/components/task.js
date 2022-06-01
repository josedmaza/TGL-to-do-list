import React from "react";
import "../style/task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Task({id, text, done, completedTask, deleteTask}) {
  return (
    <div className={done ? "task-container done" : "task-container"}>
      <div className="task-text"
      onClick={() => completedTask(id)}>
          {text}
          </div>
      <div className="task-container-icons"
      onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
}
