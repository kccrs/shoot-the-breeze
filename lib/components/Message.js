import React, { Component } from 'react';
import moment from 'moment';

export default class Message extends Component {
  render() {
    const message = this.props.message;
    const user = this.props.user;
    return (
      <li className="SingleMessage" key={message.key}>
        <span className="MessageDate">
          {moment(message.createdAt).format('MMMM Do, h:mm a')}
        </span>
        <span className="UserName">
          {user.displayName}
        </span>
        <p className="MessageContent">
          {message.content}
        </p>
      </li>
    );
  }
}
