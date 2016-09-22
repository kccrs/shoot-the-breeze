import React, { Component } from 'react';
import { pick, map, extend, filter } from 'lodash';
import moment from 'moment';
import firebase, { reference, signIn } from '../firebase';


//Components
import FilterMessagesByInput from './FilterMessagesByInput';
import SortButtons  from './SortButtons';
import UsersList from './UsersList';
import SignIn from './SignIn';
import MessageInput from './MessageInput';
import MessagesArea from './MessagesArea';

//Helper Functions
import filterMessages from '../filter-messages';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      filteredMessages: [],
      listIsFiltered: false,
      user: null,
    };
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
  }

  handleFilterByUser(uid) {
    if(this.state.listIsFiltered) {
      this.setState({ listIsFiltered: false});
    }
    else {
      const messages = this.state.messages;
      this.setState({ filteredMessages: filterMessages(uid, messages), listIsFiltered: true, });
    }
  }

  render() {
    let messages = this.state.messages;
    if (this.state.listIsFiltered) {
      messages = this.state.filteredMessages;
    }

    const { user } = this.state;

    return (
    <div className="Application">
      <header>
        <h1>Shoot the Breeze</h1>
        <FilterMessagesByInput
          messages={messages}
          handleFilter={(filteredMessages) => this.setState({ filteredMessages: filteredMessages, listIsFiltered: true })}
          handleRemoveFilter={() => this.setState({ filteredMessages: [], listIsFiltered: false })}
        />
        <SortButtons
          messages={messages}
          handleSort={(sortedMessages) => this.setState({ messages: sortedMessages })}
        />
      </header>
      <MessagesArea messages={messages}
                    user={this.state.user}
      />
      <aside>
        <UsersList
          user={this.state.user}
          messages={this.state.messages}
          handleFilterByUser={(uid) => this.handleFilterByUser(uid)}
        />
      </aside>
      <footer>
        <SignIn  handleUser={(newUser) => this.setState({ user: newUser })}/>
        <MessageInput user={this.state.user} />
      </footer>
    </div>
    )
  }
}
