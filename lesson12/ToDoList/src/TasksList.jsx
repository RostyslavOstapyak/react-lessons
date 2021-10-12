import React from 'react';
import Task from './Task.jsx';

const TasksList = ({ tasksList, handleDelete, handleTaskDone }) => (
  <ul className="list">
    {tasksList.map(task => (
      <Task key={task.id} task={task} handleDelete={handleDelete} handleTaskDone={handleTaskDone} />
    ))}
  </ul>
);

export default TasksList;
