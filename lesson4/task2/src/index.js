import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock.jsx";
import "./styles.css";

ReactDOM.render(
  <>
    <Clock location="London" offset={0} />
    <Clock location="Kyiv" offset={2} />
    <Clock location="New York" offset={-5} />
  </>,
  document.getElementById("root")
);
