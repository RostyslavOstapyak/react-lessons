/* eslint-disable camelcase */
import React from 'react';

class UserProfile extends React.Component {
  render() {
    if (!this.props.userData) {
      return null;
    }
    const { name, location, avatar_url } = this.props.userData;
    return (
      <div className="user">
        <img src={avatar_url} alt="User Avatar" className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;
