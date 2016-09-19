import React, { Component } from 'react';
import firebase, { reference } from '../firebase';

export default class ActionButtons extends Component {
  render() {
    return(
      <button
        className="ActionButtons"
        id={this.props.id}
        disabled={this.props.disabled}
        onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    )
  }
}
