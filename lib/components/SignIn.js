import React, { Component } from 'react';
import firebase, { reference, signIn, provider } from '../firebase';
import Application from './Application';

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
    // const { user, handleUser} = this.props;
    const user = this.state.user;

    if (user) {
      return (
        <div className="SignOut">
          <p>Logged in as {user.displayName} {user.email}</p>
          <button className="SignOutButton"
          onClick={() => firebase.auth().signOut()}>
          Sign Out
        </button>
        </div>
      );
    }

    if (!user) {
      return (
        <div className="SignIn">
          <button className="SignInButton"
            onClick={() => signIn()}>
            Sign In
          </button>

        </div>
      );
    }
  }
}
