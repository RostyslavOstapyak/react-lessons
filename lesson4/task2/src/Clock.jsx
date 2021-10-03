import React from "react";
import "./Clock.scss";
import Moment from "moment";
import moment from "moment";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: moment(getTimeWithOffset(props.offset)).format("HH:MM:ss"),
    };
    setInterval(() => {
      this.setState({
        time: moment(getTimeWithOffset(props.offset)).format("HH:MM:ss"),
      });
    });
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{`${this.state.time} AM`}</div>
      </div>
    );
  }
}

export default Clock;
