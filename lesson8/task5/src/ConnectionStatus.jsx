import React from 'react';

class ConnectionStatus extends React.Component {
  state = { status: { text: 'Online', class: 'status' } };

  componentDidMount() {
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onOffline = () => {
    window.removeEventListener('offline', this.onOffline);
    this.setState({ status: { text: 'Offline', class: 'status status_offline' } });
    window.addEventListener('online', this.onOnline);
  };

  onOnline = () => {
    window.removeEventListener('offline', this.onOffline);
    this.setState({ status: { text: 'Online', class: 'status' } });
    window.addEventListener('offline', this.onOffline);
  };

  render() {
    return <div className={this.state.status.class}>{this.state.status.text}</div>;
  }
}

export default ConnectionStatus;
