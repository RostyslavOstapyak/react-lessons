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
    return (
      <div>
        <Filter count={5} func={this.handleChange} />
        <ul className="users">
          {this.usersList.map(user => {
            if (user.name.toUpperCase().includes(this.state.searchStr.toUpperCase())) {
              return <User key={user.id} name={user.name} age={user.age} />;
            }
            return null;
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;
