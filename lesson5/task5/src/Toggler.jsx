import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Off",
    };
  }
  handleClick = () => {
    this.setState({
      value: this.state.value === "Off" ? "On" : "Off",
    });
  };
  render() {
    return (
      <button onClick={this.handleClick} className="toggler">
        {this.state.value}
      </button>
    );
  }
}

export default Toggler;
