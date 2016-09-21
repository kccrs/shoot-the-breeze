import React, { Component } from 'react';
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
        {this.state.charactersLeft}
      </section>
    );
  }
}
