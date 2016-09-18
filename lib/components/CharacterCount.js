import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import MessageInput from './MessageInput';

export default class CharacterCount extends Component {
  constructor(newMessage) {
    super();
    this.state = {
      charactersLeft: 140
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      charactersLeft: 140 - nextProps.newMessage.length
    });
  }

  render() {
    return(
      <section className="CharacterCount">
        <p>{this.state.charactersLeft}</p>
      </section>
    );
  }
}
