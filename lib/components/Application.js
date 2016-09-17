import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend, filter } from 'lodash';
import Filter from './Filter';
import SignIn from './SignIn';
import MessageInput from './MessageInput';
import moment from 'moment';


// Very few things in this component are a good idea.
// Feel free to blow it all away.

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

    // firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  // addNewMessage() {
  //   const { user, draftMessage } = this.state;
  //
  //   reference.push({
  //     user: pick(user, 'displayName', 'email', 'uid'),
  //     content: draftMessage,
  //     createdAt: Date.now()
  //   });
  //
  //   this.setState({ draftMessage: '' });
  // }

  render() {
    const { user, messages, draftMessage } = this.state;
    return (
    <div className="Application">
      <header>
           <h1> Shoot the Breeze</h1>
           <Filter messages={this.state.messages}
                   handleFilter={(filteredMessages) => this.setState({ messages: filteredMessages })}
           />
      </header>

      <ul>
        { this.state.messages.map(m => <li key={m.key}> {moment(m.createdAt).format('MMMM Do, h:mm a')} {m.user.displayName}: {m.content}</li>) }
      </ul>


      <footer>
        <SignIn  handleUser={(newUser) => this.setState({ user: newUser })}/>
        <MessageInput user={this.state.user}/>
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
