import React from "react";

const NumbersList = ({ numbers }) => {
  const itemsList = numbers.map((el) => <li>{el}</li>);
  return <ul>{itemsList}</ul>;
};

export default NumbersList;
