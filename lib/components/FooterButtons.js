import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import MessageInput from './MessageInput';

export default class FooterButtons extends Component {
  render() {
    return(
      <button className="ActionButton" id={this.props.id} onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    )
  }
}
