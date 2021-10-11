import React from 'react';
import Dialog from './Dialog.jsx';

class App extends React.Component {
  state = { isOpen: false };

  hideDialog = () => {
    this.setState({ isOpen: false });
  };

  showDialog = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div className="app">
        {this}
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog title="Recommendation" isOpen={this.state.isOpen} onClose={this.hideDialog}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}
export default App;
