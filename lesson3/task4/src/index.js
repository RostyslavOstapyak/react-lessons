import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Greeting from "./Greeting";

ReactDOM.render(
  <Greeting
    firstName="NaName"
    lastName="LaLastName"
    birthDate={new Date("2011-01-01T11:11:11:819Z")}
  />,
  document.getElementById("root")
);
