import firebase from 'firebase';
import 'firebase/auth';
import React, { Component } from 'react';
import Navbar from './Navbar';

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
		const token = window.localStorage.getItem("PostGrad");
	}

	render() {
		return (
			<div className="with-top-navbar">
				<Navbar />
			</div>
		);
	}
}

export default App;
