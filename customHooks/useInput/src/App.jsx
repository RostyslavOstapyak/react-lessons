import React from 'react';
import useInput from './hooks/useInput.js'

const App = () => {
  const username = useInput('');
  const password = useInput('');

  return <div>
    <input {...username} type='text' placeholder='User Name' />
    <input {...password} type='text' placeholder='Password' />
    <button onClick={() => console.log(username.value, password.value)}>Click</button>
  </div>;
};


export default App;
