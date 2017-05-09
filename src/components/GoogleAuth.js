import firebase from 'firebase';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authentication_actions';

const GoogleAuth = ({ user, router }) => {
	const signIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then((result) => {
			console.log(`i worked!`, result);
			// This gives you a Google Access Token. You can use it to access the Google API.
			const token = result.credential.accessToken;
			// The signed-in user info.
			const currentUser = result.user;

			console.log(user, `i'm the user`);
			this.props.authenticate(true);
			router.history.push('/feed');

		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			const credential = error.credential;
			// ...
		});
	};
	return (
		<button className="btn btn" type="button" onClick={ () => signIn() }>
			<span className="icon icon-google-plus"/>
			<span /> Sign in with Google
		</button>
	);
};

export default connect(({ user }) => ({ user }), actions)(GoogleAuth);
