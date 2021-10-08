import React from 'react';

class ConnectionStatus extends React.Component {
  state = { status: 'online' };

  componentDidMount() {
    window.addEventListener('online', this.toggleStatus);
    window.addEventListener('offline', this.toggleStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.toggleStatus);
    window.removeEventListener('offline', this.toggleStatus);
  }

  toggleStatus = e => {
    this.setState({ status: e.type });
  };

  render() {
    const statusClass = this.state.status === 'online' ? '' : 'status_offline';

    return <div className={`status ${statusClass}`}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;
