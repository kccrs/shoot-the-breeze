import React, { Component } from 'react';
import firebase, { reference, signIn, provider } from '../firebase';
import ActionButtons from './ActionButtons';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  newUser(newUser) {
    this.setState({ user: newUser });
    this.props.handleUser(this.state.user);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((newUser) => this.newUser(newUser));
  }


  render() {
    const user = this.state.user;

    if (user) {
      return (
        <div className="SignOut">
          <p>Logged in as {user.displayName} ({user.email})</p>
          <ActionButtons id="SignOutButton" text="Sign Out" handleClick={() => firebase.auth().signOut()} />
        </div>
      );
    }

    if (!user) {
      return (
        <div className="SignIn">
          <ActionButtons id="SignInButton" text="Sign In" handleClick={() => signIn()} />
        </div>
      );
    }
  }
}
