import React from 'react';
import TasksList from './TasksList.jsx';
import CreateTask from './CreateTask.jsx';

class TodoList extends React.Component {
  state = {
    tasksList: [
      {
        id: 1,
        text: 'task1',
        done: false,
      },
      {
        id: 2,
        text: 'task2',
        done: false,
      },
      {
        id: 3,
        text: 'task3',
        done: false,
      },
    ],
  };

  getMaxId = () => {
    let maxId = 0;
    this.state.tasksList.map(el => {
      if (el.id > maxId) {
        maxId = el.id;
      }
      return el;
    });
    console.log((maxId += 1));
    return maxId;
  };

  onCreate = text => {
    const taskObject = {
      id: this.getMaxId(),
      text,
      done: false,
    };
    this.setState({
      tasksList: [...this.state.tasksList, taskObject],
    });
  };

  handleDelete = taskObject => {
    const taskIndex = this.state.tasksList.indexOf(taskObject);
    this.state.tasksList.splice(taskIndex, 1);
    this.setState({ tasksList: this.state.tasksList });
  };

  handleTaskDone = taskObject => {
    const taskInArray = this.state.tasksList.find(el => el.id === taskObject.id);
    taskInArray.done = !taskInArray.done;
    this.setState({ tasksList: this.state.tasksList });
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTask onCreate={this.onCreate} />
          <TasksList
            tasksList={this.state.tasksList}
            handleDelete={this.handleDelete}
            handleTaskDone={this.handleTaskDone}
          />
        </main>
      </>
    );
  }
}

export default TodoList;
