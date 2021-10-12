import React from 'react';

const Task = ({ task, handleTaskDone, handleDelete }) => (
  <li className={`list-item ${task.done ? ' list-item_done' : ''}`}>
    <input
      type="checkbox"
      className="list-item__checkbox"
      checked={task.done}
      onChange={() => handleTaskDone(task)}
    />
    <span className="list-item__text">{task.text}</span>
    <button className="list-item__delete-btn" onClick={() => handleDelete(task)}></button>
  </li>
);
export default Task;
