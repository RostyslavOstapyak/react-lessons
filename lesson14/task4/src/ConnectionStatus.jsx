import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  const changeStatus = e => {
    setStatus(e.type);
  };

  useEffect(() => {
    window.addEventListener('offline', changeStatus);
    window.addEventListener('online', changeStatus);
    return () => {
      window.removeEventListener('online', changeStatus);
      window.removeEventListener('offline', changeStatus);
    };
  }, []);

  let className = '';
  if (status === 'offline') {
    className += 'status_offline';
  }

  return <div className={`status ${className}`}>{status}</div>;
};

export default ConnectionStatus;
