import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Mailbox from "./Mailbox.jsx";

ReactDOM.render(
  <Mailbox unreadMessages={["a"]} />,
  document.getElementById("root")
);
