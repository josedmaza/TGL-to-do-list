import React, { useState } from "react";
import "../style/taskList.css";
import TaskForm from "./form";
import Task from "./task";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim() === "") {
      return alert("The task cannot be empty");
    }
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completedTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="task-list-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            completedTask={completedTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}
