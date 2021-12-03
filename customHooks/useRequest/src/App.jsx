import React from 'react';
import axios from 'axios';
import useRequest from './hooks/useRequest';


const App = () => {

  const [list, loading, error] = useRequest(fetchToDo)

  function fetchToDo() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Something went wrong :(</h1>
  }

  return <div>
    {list && list.map(el => <div key={el.id} style={{ padding: 30, border: '1px solid black' }} >{el.id}. {el.title}</div>)}
  </div>
};


export default App;
