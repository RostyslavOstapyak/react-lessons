import React from 'react';

const CreateTask = ({ taskName, handleChange, onCreate }) => (
  <div className="create-task">
    <input className="create-task__input" type="text" value={taskName} onChange={handleChange} />
    <button className="btn create-task__btn" onClick={onCreate}>
      Create
    </button>
  </div>
);

export default CreateTask;
