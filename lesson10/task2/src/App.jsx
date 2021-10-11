import React from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Ford',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={userData.firstName} />
          <Profile userData={userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;
