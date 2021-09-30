import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Profile from "./Profile.jsx";

const userData = {
  firstName: "John",
  lastName: "Doe",
  birthDate: "1991-01-17T11:11:11.819Z",
  birthPlace: "London",
};

ReactDOM.render(
  <Profile userData={userData} />,
  document.getElementById("root")
);
