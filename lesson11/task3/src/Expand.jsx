import React from 'react';

class Expand extends React.Component {
  state = { isVisible: false };

  toggleContent = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleContent}>
            {this.state.isVisible ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {this.state.isVisible ? <div className="expand__content">{this.props.children}</div> : null}
      </div>
    );
  }
}
export default Expand;
