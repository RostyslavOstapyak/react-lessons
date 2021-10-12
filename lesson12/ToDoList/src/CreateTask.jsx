import React from 'react';

// const CreateTask = ({ taskName, handleChange, onCreate }) => ;

class CreateTask extends React.Component {
  state = { value: '' };

  handleChange = event => this.setState({ value: event.target.value });

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="btn create-task__btn"
          onClick={() => {
            this.props.onCreate(this.state.value);
            this.setState({ value: '' });
          }}
        >
          Create
        </button>
      </div>
    );
  }
}

export default CreateTask;
