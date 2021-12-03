import React from 'react';

const App = () => {
  const [value, setValue] = React.useState('');
  const debouncedSearch = useDebaounce(search, 500)

  const search = (query) => {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
  }
  const onChange = e => {
    setValue(e.target.value)
    search(e.target.value)
  }

  return <div>
    <input type='text' value={value} onChange={onChange} />
  </div>;
};


export default App;
