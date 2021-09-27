import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./list.css";

ReactDOM.render(
  <>
    <h1 className="title">Todo List</h1>
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
    </main>
  </>,
  document.getElementById("root")
);
