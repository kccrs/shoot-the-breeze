import React, { Component } from 'react';
import {uniq, sortedUniq} from 'lodash';

export default class UsersList extends Component {
    constructor() {
        super();
    }

    get uniqueUsers() {
        let users = this.props.messages.map(m => {
            debugger
        });
        let uniqueUsers = _.uniqBy(users, 'key');
        return _.sortBy(uniqueUsers, 'userName');
    }

    render() {

        return (
            <article>
                <h3> Users </h3>
                <ul>
                    {this.uniqueUsers.map(u => <li onClick={this.props.handleFilterByUser.bind(this, u.key)} key={u.key}> {u.userName} </li>) }
                </ul>
            </article>
        )
    }
}

// return { userName: m.user.displayName, key: m.user.uid }