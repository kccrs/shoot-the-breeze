import React, { Component } from 'react';
import moment from 'moment';
import { reference } from '../firebase';

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
        { loggedInUser.uid === user.uid ?
          <button
            onClick={() => reference.child(message.key).remove()}
            className='MessageDelete'
            children='x'
          />
        : null
        }
        <p className="MessageContent">
          {message.content}
        </p>
      </li>
    );
  }
}
