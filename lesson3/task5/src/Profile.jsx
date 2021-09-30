import React from 'react';
import moment from 'moment';

const Profile = (props) =>{
    const {firstName, lastName,birthDate,birthPlace} = props;
    const formattedDate = moment(birthDate).format('DD MMM YY');
    return (
    <div className="profile">
        <div className="profile__name">{`${firstName} ${lastName}`}</div>
        <div className="profile__birth">{`Was born ${formattedDate} 
        in ${birthPlace}`}</div>
    </div>
    );
};

export default Profile;