import React, { Component } from "react";
import Message from "./Message.jsx";

const Message = ({ text }) => {
  if (!text) {
    return null;
  }
  return <div className="message">{text}</div>;
};

export default Message;
