import React from 'react';
import Expand from './Expand.jsx';

class App extends React.Component {
  state = { contentVisible: false };

  toggleContent = () => {
    this.setState({ contentVisible: !this.state.contentVisible });
  };

  render() {
    return (
      <Expand
        toggleContent={this.toggleContent}
        isVisible={this.state.contentVisible}
        title="Some title IDK"
      >
        idk, some text
      </Expand>
    );
  }
}

export default App;
