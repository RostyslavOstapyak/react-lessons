import React from "react";

const GoodButton = () => {
  return (
    <button
      onClick={() => {
        alert("Good job!");
      }}
      className="fancy-button"
    >
      Click me!
    </button>
  );
};

export default GoodButton;
