import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    window.addEventListener('online', setStatus('online'));
    window.addEventListener('offline', setStatus('offline'));
    return () => {
      window.removeEventListener('online', setStatus('online'));
      window.removeEventListener('offline', setStatus('offline'));
    };
  }, []);

  let className = '';
  if (status === 'offline') {
    className += 'status_offline';
  }

  return <div className={`status ${className}`}>{status}</div>;
};

export default ConnectionStatus;
