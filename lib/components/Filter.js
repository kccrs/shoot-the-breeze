import React, { Component } from 'react';

export default class Filter extends Component {
  filterMessages(e) {
    let regexp = new RegExp(e.target.value, 'i');

    let filteredMessages = this.props.messages.filter(m => {
      if (regexp.test(m.content)) {
        return m;
      }
    });

    if(e.target.value) {
      this.props.handleFilter(filteredMessages);
    }
    else {
      this.props.handleRemoveFilter();
    }
  }

  render() {
    return (
      <article>
        <label> Filter:
        <input className = "FilterInput"
          onChange = { (e) => this.filterMessages(e) }
          placeholder = "Filter" />
        </label>
      </article>
    )
  }
}
