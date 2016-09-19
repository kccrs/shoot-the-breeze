import React, { Component } from 'react';
import { map } from 'lodash';
import moment from 'moment';
import Message from './Message';

export default class MessagesArea extends Component {
  render() {
    return (
      <ul className="MessageList">
        {this.props.messages.map(m =>
          <Message
            key={m.id}
            id={m.id}
            messageDate={moment(m.createdAt).format('MMMM Do, h:mm a')}
            username={m.user.displayName}
            messageContent={m.content}
          />)
        }
      </ul>
    )
  }
}
