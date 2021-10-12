import React from 'react';

const TasksList = ({ tasksList, handleDelete, handleTaskDone }) => (
  <ul className="list">
    {tasksList.map(task => (
      <li key={task.id} className={task.done ? 'list-item list-item_done' : 'list-item'}>
        <input
          type="checkbox"
          className="list-item__checkbox"
          checked={task.done}
          onChange={() => handleTaskDone(task)}
        />
        {task.text}
        <button className="list-item__delete-btn" onClick={() => handleDelete(task)}></button>
      </li>
    ))}
  </ul>
);

export default TasksList;
