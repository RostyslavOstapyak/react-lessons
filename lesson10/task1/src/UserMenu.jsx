/* eslint-disable camelcase */
import React from 'react';

const UserMenu = ({ userData }) => {
  if (!userData) {
    return null;
  }
  const { name, avatar_url } = userData;
  return (
    <div className="menu">
      <span className="menu__name">{name}</span>
      <img src={avatar_url} alt="User Avatar" className="menu__avatar" />
    </div>
  );
};

export default UserMenu;
