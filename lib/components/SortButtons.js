import React, { Component } from 'react';
import ActionButtons from './ActionButtons';

export default class SortButtons extends Component {

  sortChronologically() {
    let messages = this.props.messages;
    let sortedMessages = messages.sort((a, b) => a.createdAt - b.createdAt);
    this.props.handleSort(sortedMessages);
  }

  sortReverseChronologically() {
    let messages = this.props.messages;
    let sortedMessages = messages.sort((a, b) => b.createdAt - a.createdAt);
    this.props.handleSort(sortedMessages);
  }

  render() {
    return (
      <article className="SortContainer">
        <ActionButtons
          id="SortUp"
          text="Sort ↑"
          handleClick={() => this.sortChronologically()}
        />
        <ActionButtons
          id="SortDown"
          text="Sort ↓"
          handleClick={() => this.sortReverseChronologically()}
        />
      </article>
    );
  }
}
