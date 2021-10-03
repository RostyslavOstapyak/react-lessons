import React from "react";

class GoodButton extends React.Component {
  handleClick(event) {
    alert(event.target.textContent);
  }
  render() {
    return (
      <button onClick={this.handleClick} className="fancy-button">
        Click me!
      </button>
    );
  }
}

export default GoodButton;
