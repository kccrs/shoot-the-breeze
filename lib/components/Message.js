import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import moment from 'moment';

export default class Message extends Component {

  render() {
    return (
      <li className="SingleMessage" key={this.props.id}>
        <span className="MessageDate">
          {this.props.messageDate}
        </span>
        <span className="UserName">
          {this.props.username}
        </span>
        <p className="MessageContent">
          {this.props.messageContent}
        </p>
      </li>
    );
  }
}
