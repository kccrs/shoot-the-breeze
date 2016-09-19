import React, { Component } from 'react';
import { pick, map, extend, filter } from 'lodash';
import moment from 'moment';
import firebase, { reference, signIn } from '../firebase';
import Filter from './Filter';
import SortButtons  from './SortButtons';
import UsersList from './UsersList';
import SignIn from './SignIn';
import MessageInput from './MessageInput';
import MessagesArea from './MessagesArea';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null
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

  render() {
    const { user, messages } = this.state;
    return (
    <div className="Application">
      <header>
        <h1> Shoot the Breeze</h1>
        <Filter
          messages={this.state.messages}
          handleFilter={(filteredMessages) => this.setState({ messages: filteredMessages })}
        />
        <SortButtons
          messages={this.state.messages}
          handleSort={(sortedMessages) => this.setState({ messages: sortedMessages })}
        />
      </header>
      <MessagesArea messages={this.state.messages}/>
      <aside>
        <UsersList
              messages={this.state.messages}
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

// handleUser={(newUser) => this.setState({ user: newUser })}
  // <header>
  //     <h1> Shoot the Breeze</h1>
  //     <Filter />
  //     <Sort />
  // </header>
  // <section>
  //   //messages render here
  // </section>
  // <aside>
  //   <UsersList />
  // </aside>
  // <footer>
  //   <article>
  //     <SignIn />
  //     <SignOutButton />
  //   </article>
  //   <article>
  //     <Filter />
  //     <CharacterCount />
  //     <SubmitButton />
  //     <ClearButton />
  //   </article>
  // </footer>
