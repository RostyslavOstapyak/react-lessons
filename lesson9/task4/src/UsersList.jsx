import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = { searchStr: '' };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const usersArray = this.props.usersList;

    const resultArray =
      this.state.searchStr === ''
        ? usersArray
        : usersArray.filter(user =>
            user.name.toLowerCase().includes(this.state.searchStr.toLowerCase()),
          );

    return (
      <>
        <Filter
          count={resultArray.length}
          onChange={this.handleChange}
          filterText={this.state.searchStr}
        />
        <ul className="users">
          {resultArray.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
