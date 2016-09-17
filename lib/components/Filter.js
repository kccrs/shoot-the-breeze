import React, { Component } from 'react';

export default class Filter extends Component {
    constructor(props) {
        super();
    }

    filterMessages(e) {
        let messages = this.props.messages;
        let filterBy = e.target.value;
        let regexp = new RegExp(filterBy, 'i');
        let filteredMessages = messages.map(m => {
            if (regexp.test(m.content)) {
                return m;
            }
        });
        debugger;
        if(filterBy === '') {filteredMessages = messages;}
        this.props.handleFilter(filteredMessages);
    }

    render() {
        return (
            <article>
                <label>Filter:    
                <input 
                    className="FilterInput"
                    onChange={(e) =>  this.filterMessages(e)}
                    placeholder="Filter"
                />
                </label>

            </article>
        )
    }
}
