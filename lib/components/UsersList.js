import React, { Component } from 'react';
import _, {uniq, sortedUniq} from 'lodash';

export default class UsersList extends Component {

  get uniqueUsers() {
    let users = this.props.messages.map(m => {
      return { userName: m.user.displayName, key: m.user.uid , email: m.user.email};
    });
    let uniqueUsers = _.uniqBy(users, 'key');
    return _.sortBy(uniqueUsers, 'userName');
  }

  render() {
    const user = this.props.user || {};
    return (
      <article className="UserList">
        <h3>Users</h3>
          <ul>
            {this.uniqueUsers.map(u => {
              if (u.key === user.uid) {
                return <li
                  onClick={() => this.props.handleFilterByUser(u.key) }
                  key={u.key}
                  className="MyUserName">
                  {u.userName}
                  <img src="../Almond.png"/>
                  ({u.email})
                </li>
              }
              else {
                return <li
                  onClick={() => this.props.handleFilterByUser(u.key) }
                  key={u.key}>
                  {u.userName}<br/>
                  ({u.email})
                </li>
              }
            }) }
          </ul>
    </article>
    )
  }
}
