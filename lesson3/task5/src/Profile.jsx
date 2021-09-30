import React from 'react';

const userInfo = (props) =>{
    console.log(props)
    return (
         <div className="profile">
        <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
        <div className="profile__birth">{`Was born ${new Date(props.userData.birthDate).getDate()} ${new Date(props.userData.birthDate).getMonth()} ${new Date(props.userData.birthDate).getFullYear()% 100} in ${props.userData.birthPlace}`}</div>
      </div>
    )
}

export default userInfo;