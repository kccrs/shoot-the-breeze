import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import { pick, map, extend, filter } from 'lodash';
import moment from 'moment';

export default class MessageInput extends Component {
  constructor() {
    super();
    this.state = {
      newMessage: ''
    };
  }

  addNewMessage() {
    const user = this.props.user;
    const newMessage = this.state.newMessage;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: newMessage,
      createdAt: Date.now()
    });

    this.setState({ newMessage: '' });
  }

  render() {
    return (
      <div className="MessageInput">
        <input
          placeholder="Message…"
          value={this.state.newMessage}
          onChange={(e) => this.setState({ newMessage: e.target.value })}
          />
        <button onClick={() => this.addNewMessage()}>Add New Message</button>
      </div>
    )
  }
}
