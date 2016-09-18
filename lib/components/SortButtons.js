import React, { Component } from 'react';

export default class SortButtons extends Component {
    constructor() {
        super();
    }

    sortChronilogically() {
        let messages = this.props.messages;
        let sortedMessages = messages.sort((a, b) => a.createdAt - b.createdAt);
        this.props.handleSort(sortedMessages);
    }

    sortReverseChronilogically() {
        let messages = this.props.messages;
        let sortedMessages = messages.sort((a, b) => b.createdAt - a.createdAt);
        this.props.handleSort(sortedMessages);
    }

    render() {
        return(
            <article>
                <button 
                    children="Sort +"
                    onClick={() => this.sortChronilogically()}
                />
                <button
                    children="Sort -"
                    onClick={() => this.sortReverseChronilogically()}
                />
            </article>
        );
    }
}