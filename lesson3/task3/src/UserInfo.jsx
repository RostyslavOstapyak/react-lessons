import React from 'react';
import Avatar from './Avatar.jsx'

 const UserInfo = (props) =>{
    //  console.log(props)
     // тут мы получаем обьект props с ключем author
     // так как указали это в предыдущем файле
     // сам же обьект user имеет внутри поля
     // avatarUrl + name
     // эти поля мы передаем на строке 17 
     // следующей компроненте
     
     // так же используем в этой компоненте поле name
     
    return(
        <div className="user-info">
       <Avatar avatarUrl={props.author.avatarUrl} name={props.author.name} />
        <div className="user-info__name">{props.author.name}</div>
      </div>
    );
};

export default UserInfo;