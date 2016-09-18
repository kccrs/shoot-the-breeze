import React, { Component } from 'react';
import {uniq, sortedUniq} from 'lodash';

export default class UsersList extends Component {
    constructor() {
        super();
    }

    get uniqueUsers() {
        let users = this.props.messages.map(m => {
            return {userName: m.user.displayName, key: m.user.uid}
                });
        let uniqueUsers = _.uniqBy(users, 'key');
        return _.sortBy(uniqueUsers, 'userName');
    }
    
    render() {
        return (
            <article>
                <h3> Users </h3>
                    <ul>
                        {this.uniqueUsers.map(u => <li key={u.key}> {u.userName} </li>)}
                    </ul>
            </article>
        )
    }
}