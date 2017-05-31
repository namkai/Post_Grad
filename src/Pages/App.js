import firebase from 'firebase';
import 'firebase/auth';
import React, { Component } from 'react';
import Navbar from '../Shared/Components/Navbar';
import { connect } from 'react-redux';
import Messages from './Conversations/index';
import { authenticate } from '../Shared/Components/Authentication/Actions'

export class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCs6JKsjx0pMAAXLU4fFHNlkTdnqfHpjdw',
      authDomain: 'portfolio-d6396.firebaseapp.com',
      databaseURL: 'https://portfolio-d6396.firebaseio.com',
      projectId: 'portfolio-d6396',
      storageBucket: 'portfolio-d6396.appspot.com',
      messagingSenderId: '892183671230',
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
//        this.props.authenticate();
      }
    });
  }

  render() {
    return (
      <div className="with-top-navbar">
        <Navbar />
        <Messages />
      </div>
    );
  }
}

export default connect(null, authenticate)(App);