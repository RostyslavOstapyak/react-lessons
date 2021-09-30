import React from 'react';
import moment from 'moment';

const userInfo = (props) =>{
    console.log(props)
    return (
    <div className="profile">
        <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
        <div className="profile__birth">{`Was born ${moment(new Date(props.userData.birthDate)).format('DD MMM YY')} 
        in ${props.userData.birthPlace}`}</div>
    </div>
    )
}

export default userInfo;