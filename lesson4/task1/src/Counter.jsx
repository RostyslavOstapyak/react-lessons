import React, { Component } from "react";

import "./counter.css";

let counter = 0;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start,
    };
    // Do Not do this way
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, props.interval);
  }
  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
