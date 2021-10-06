import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import NumbersList from "./NumbersList.jsx";

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumbersList numbers={numbers} />,
  document.getElementById("root")
);
