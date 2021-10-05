import React from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

class Status extends React.Component {
  state = { isOnline: false };

  setOnline = () => {
    this.setState({ isOnline: true });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline />}
      </div>
    );
  }
}

export default Status;
