import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.usersList = props.usersList;
    this.state = { searchStr: '' };
  }

  handleChange = e => {
    this.setState({ searchStr: e.target.value });
  };

  render() {
    const resultArray = this.state.searchStr
      ? this.usersList.filter(user =>
          user.name.toUpperCase().includes(this.state.searchStr.toUpperCase()),
        )
      : this.usersList;

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
