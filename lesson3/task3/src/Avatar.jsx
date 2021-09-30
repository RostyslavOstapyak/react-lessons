import React from 'react';

const Avatar = (props) =>{
    console.log(props)
    // тут наш обьект props хранит только указанные
    // два ключа: 
    //  avatarUrl потому что мы так указали
    // в предыдущем файле
    // и поле name по той же причине что выше

    return(
         <img
          className="avatar"
          src={props.avatarUrl}
          alt={props.name}
        />
    );
}

export default Avatar;