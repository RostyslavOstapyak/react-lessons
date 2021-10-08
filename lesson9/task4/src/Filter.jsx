import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input type="text" className="filter__input" onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Filter;
