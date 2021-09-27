import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const renderSeconds = (time) => {
  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0 ? "#fff" : "#000";
  const textColor = seconds % 2 !== 0 ? "#fff" : "#000";

  const styles = {
    color: textColor,
    backgroundColor: backgroundColor,
  };

  ReactDOM.render(
    <>
      <div className="seconds" style={styles}>
        Now is {seconds}
      </div>
    </>,
    document.getElementById("root")
  );
};

renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);
