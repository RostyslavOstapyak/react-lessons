import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import UserList from "./UserList.jsx";

const users = [
  {
    id: "id-0",
    age: 21,
    name: "Bob",
  },
  {
    id: "id-1",
    age: 17,
    name: "Tom",
  },
  {
    id: "id-2",
    age: 18,
    name: "Tad",
  },
  {
    id: "id-3",
    age: 45,
    name: "Sam",
  },
];

ReactDOM.render(<UserList users={users} />, document.getElementById("root"));
