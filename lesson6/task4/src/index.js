import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Status from "./Status.jsx";

ReactDOM.render(<Status isOnline={false} />, document.getElementById("root"));
