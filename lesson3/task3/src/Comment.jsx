import React from "react";
import "./comment.css";
import moment from "moment";
import UserInfo from "./UserInfo.jsx"

const formatDate = date => moment(date).format("DD MMM YYYY");

function Comment(props) {
  // console.log(props)
  // тут мы получаем обьект у которого 3 поля:
  // ключи обьекта props это ключевые слова 
  // которые мы указали в предыдущем файле 
  // (в том откуда "прилетели" эти значения)
  // author{
  // name:'Tom',
  // avatarUrl: 'url'
  // }
  // date: собственно указанная дата
  // text: собственно указанный текст
  
  // строка 33 мы отправляем обьект user из обьекта props
  // и только этот обьект !!
  // название поля опять user
  // в следующем файле мы должны получить обьект props
  // в котором будет ключ user с обьектом
  // user{
  // name:'Tom',
  // avatarUrl: 'url'
  // }

  return (
    <div className="comment">
      <UserInfo user={props.author} /> 
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
