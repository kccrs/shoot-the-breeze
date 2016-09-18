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

  // handleChange(e) {
  //   const currentCharacters = this.props.newMessage.length;
  //   this.setState({ charactersLeft: this.state.charactersLeft - currentCharacters })
    // const charactersLeft = maxCharacters - currentCharacters;
    // return this.state.charactersLeft;
  // }

  render() {
    return(
      <section className="CharacterCount">
        <p>{this.state.charactersLeft}</p>
      </section>
    );
  }

}
