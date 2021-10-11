import React from 'react';

const Expand = ({ children, toggleContent, isVisible, title }) => (
  <div className="expand border">
    <div className="expand__header">
      <span className="expand__title">{title}</span>
      <button className="expand__toggle-btn" onClick={toggleContent}>
        {isVisible ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </button>
    </div>
    <div className="expand__content">{isVisible ? children : null}</div>
  </div>
);

export default Expand;
