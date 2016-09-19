import React, { Component } from 'react';

import Message from './Message';

export default class MessagesArea extends Component {
  render() {
    return (
      <ul className="MessageList">
        {this.props.messages.map(m => 
          <Message
              key={m.key}
              message={m}
              user={m.user}
            />
          )
        }
      </ul>
    )
  }
}

