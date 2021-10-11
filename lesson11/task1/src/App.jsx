import React from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class App extends React.Component {
  state = { number: 0 };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <OddNumbers title="Odd numbers" number={this.state.number} />
        <Numbers title="All numbers" number={42} />
      </div>
    );
  }
}

export default App;
