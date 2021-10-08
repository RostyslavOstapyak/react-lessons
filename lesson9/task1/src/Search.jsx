import React from 'react';

class Search extends React.Component {
  state = { value: '' };

  handleChange = e => {
    this.setState({ value: e.value });
  };

  handleClick = () => alert(`Search text: ${this.state.value}`);

  render() {
    return (
      <form className="search">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="search__input"
        />
        <button className="search__button" onClick={this.handleClick}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
