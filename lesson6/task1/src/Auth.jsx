import React, { Component } from "react";
import Greeting from "./Greeting.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const button = this.state.isLoggedIn ? (
      <button onClick={this.handleLogout}>Logout</button>
    ) : (
      <button onClick={this.handleLogin}>Login</button>
    );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;
