import React from 'react';

const userInfo = (props) =>{
    return (
         <div className="profile">
        <div className="profile__name">{`${props.firstName} ${props.lastName}`}</div>
        <div className="profile__birth">{`Was born ${new Date(props.birthDate).getDate()} ${new Date(props.birthDate).getMonth()} ${new Date(props.birthDate).getFullYear()% 100} in ${props.birthPlace}`}</div>
      </div>
    )
}

export default userInfo;