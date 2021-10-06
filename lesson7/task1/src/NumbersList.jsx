import React from "react";

const NumbersList = ({ numbers }) => {
  const itemsList = numbers.map((el) => <li key={el}>{el}</li>);
  return <ul>{itemsList}</ul>;
};

export default NumbersList;
