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
            
            message={m}
          />)
        }
      </ul>
    )
  }
}
