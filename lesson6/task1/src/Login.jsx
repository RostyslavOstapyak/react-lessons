import React from "react";

const Login = ({ onLogin }) => {
  return (
    <button onClick={onLogin} className="btn login">
      Login
    </button>
  );
};

export default Login;
