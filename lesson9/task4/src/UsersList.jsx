import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = { searchStr: '' };

  handleChange = e => {
    this.setState({ searchStr: e.target.value });
  };

  render() {
    const usersArray = this.props.usersList;
    console.log(usersArray);

    const resultArray = this.state.searchStr
      ? usersArray.filter(user =>
          user.name.toLowerCase().includes(this.state.searchStr.toLowerCase()),
        )
      : usersArray;
    return (
      <div>
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
      </div>
    );
  }
}

export default UsersList;
