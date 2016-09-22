import React, { Component } from 'react';
import moment from 'moment';
import { reference } from '../firebase';

const RemoveMessageButton = ({ loggedInUser, user, message }) => {
  if (!loggedInUser || !user || !message) { return null; }
  if (loggedInUser.uid !== user.uid) { return null; }
  return <button 
            onClick={() => reference.child(message.key).remove()}
            className='MessageDelete'
            children='x'
          />
}

export default class Message extends Component {
  render() {
    const message = this.props.message;
    const user = this.props.user;
    const loggedInUser = this.props.loggedInUser;

    return (
      <li className="SingleMessage" key={message.key}>
        <span className="MessageDate FullDate">
          {moment(message.createdAt).format('MMMM Do, h:mm a')}
        </span>
        <span className="MessageDate  MobileDate">
          {moment(message.createdAt).format('M[/]D, h:mm a')}
        </span>
        <span className="UserName">
          {user.displayName}
        </span>

        <RemoveMessageButton loggedInUser={loggedInUser} user={user} message={message}/>

        <p className="MessageContent">
          {message.content}
        </p>
      </li>
    );
  }
}
