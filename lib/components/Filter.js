import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class Filter extends Component {
    constructor() {
        super();
        this.state = {
            messages: this.messagesFromFirebase,
        };
    }

    get messagesFromFirebase() {
        reference.limitToLast(100).on('value', (snapshot) => {
            const messages = snapshot.val() || {};
            this.setState({
                messages: map(messages, (val, key) => extend(val, { key }))
            });
        });
    }

    filterMessages(e) {
        let messages = this.state.messages;
        let filterBy = e.target.value;
        let regexp = new RegExp(filterBy, 'i');
        let filteredMessages = messages.filter(m => {
            if (regexp.test(m.content)) {
                return m;
            }
        });
        if (filterBy === '') {
            filteredMessages = messages;
        }
        this.props.handleFilter(filteredMessages);
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