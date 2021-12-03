import React from 'react';
import useDebounce from './hooks/useDebounce'


const App = () => {
  const [value, setValue] = React.useState('');
  const DELAY = 500;
  const debouncedSearch = useDebounce(search, DELAY);

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
  }

  const onChange = e => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return <div>
    <input type='text' value={value} onChange={onChange} />
  </div>;
};


export default App;
