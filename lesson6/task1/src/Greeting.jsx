import React from "react";
import UserGreeting from "./UserGreeting.jsx";
import GuestGreeting from "./GuestGreeting.jsx";

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
