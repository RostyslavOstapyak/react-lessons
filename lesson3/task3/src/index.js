import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Comment from "./Comment.jsx";

const userInfo = {
  name: "Tom",
  avatarUrl: "https://avatars1.githubusercontent.com/users",
};

ReactDOM.render(
  <Comment
    author={userInfo}
    text="Good job!"
    date={new Date("2019-01-01T11:32:19.566Z")}
  />,
  document.getElementById("root")
);
