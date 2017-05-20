import firebase from 'firebase';
import 'firebase/auth';
import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import * as actions from '../actions/user_actions';
import Messages from '../pages/Messages';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCs6JKsjx0pMAAXLU4fFHNlkTdnqfHpjdw',
			authDomain: 'portfolio-d6396.firebaseapp.com',
			databaseURL: 'https://portfolio-d6396.firebaseio.com',
			projectId: 'portfolio-d6396',
			storageBucket: 'portfolio-d6396.appspot.com',
			messagingSenderId: '892183671230',
		});
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.addUser(user);
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

export default connect(null, actions)(App);
