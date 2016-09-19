import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import { pick, map, extend, filter } from 'lodash';
import moment from 'moment';
import CharacterCount from './CharacterCount';
import ActionButtons from './ActionButtons';

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
    this.emptyInputField();
  }

  emptyInputField() {
    this.setState({ newMessage: '' });
  }

  render() {
    return (
      <section className="MessageInput">
        <textarea
          placeholder="Message…"
          value={this.state.newMessage}
          maxLength="140"
          onChange={(e) => this.setState({ newMessage: e.target.value })}>
        </textarea>
        <CharacterCount newMessage={this.state.newMessage} />
        <div className="FooterButtons">
          <ActionButtons
            id="SubmitButton"
            text="Submit"
            disabled={!this.state.newMessage || this.state.newMessage.length > 140}
            handleClick={() => this.addNewMessage()}
          />
          <ActionButtons
            id="ClearButton"
            text="Clear"
            disabled={!this.state.newMessage}
            handleClick={() => this.emptyInputField()}
          />
        </div>
      </section>
    )
  }
}
