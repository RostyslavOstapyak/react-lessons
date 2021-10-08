import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const usersList = [
  { id: 1, name: 'John', age: 18 },
  { id: 2, name: 'Bob', age: 33 },
  { id: 3, name: 'Tom', age: 22 },
  { id: 4, name: 'Aff', age: 18 },
  { id: 5, name: 'Boy', age: 55 },
  { id: 6, name: 'L', age: 52 },
  { id: 7, name: 'Ann', age: 66 },
  { id: 8, name: 'Alan', age: 687 },
  { id: 9, name: 'Tony', age: 21 },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList usersList={usersList} />, rootElement);
