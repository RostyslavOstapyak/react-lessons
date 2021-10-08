import React from 'react';

class Search extends React.Component {
  state = { value: '' };

  onChange = e => {
    this.setState({ value: e.value });
  };

  onClick = () => alert(`Search text: ${this.state.value}`);

  render() {
    return (
      <form className="search">
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          className="search__input"
        />
        <button className="search__button" onClick={this.onClick}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
