import { auth } from 'firebase';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authentication_actions';

const GithubAuth = ({ user, redirect, authenticate }) => {
	const signIn = () => {
		const githubprovider = new auth.GithubAuthProvider();
		auth().signInWithPopup(githubprovider).then((result) => {
			console.log('success!');
			authenticate(true);
			const token = result.credential.accessToken;
			window.localStorage.setItem('PostGrad', token);
			redirect();
			// This gives you a Google Access Token. You can use it to access the Google API.
			// The signed-in user info.
			const currentUser = result.user;
		}).catch((error) => {
			if (error.code === 'auth/account-exists-with-different-credential') {
				// Step 2.
				// User's email already exists.
				// The pending GitHub credential.
				const pendingCred = error.credential;
				// The provider account's email address.
				const email = error.email;
				// Get registered providers for this email.
				auth().fetchProvidersForEmail(email).then((providers) => {
					// Step 3.
					// If the user has several providers,
					// the first provider in the list will be the "recommended" provider to use.
					if (providers[ 0 ] === 'password') {
						// Asks the user his password.
						// In real scenario, you should handle this asynchronously.
						const password = auth().promptUserForPassword();
						auth.signInWithEmailAndPassword(email, password).then(user =>
							// Step 4a.
							user.link(pendingCred)).then(() => {
							// GitHub account successfully linked to the existing Firebase user.
								authenticate();
								redirect();
							});
						return;
					}
					// All the other cases are external providers.
					// Construct provider object for that provider.
					const provider = auth.getProviderForProviderId(providers[ 0 ]);
					// At this point, you should let the user know that he already has an account
					// but with a different provider, and let him validate the fact he wants to
					// sign in with this provider.
					// Sign in to provider. Note: browsers usually block popup triggered asynchronously,
					// so in real scenario you should ask the user to click on a "continue" button
					// that will trigger the signInWithPopup.
					auth.signInWithPopup(provider).then((result) => {
						// Remember that the user may have signed in with an account that has a different email
						// address than the first one. This can happen as Firebase doesn't control the provider's
						// sign in flow and the user is free to login using whichever account he owns.
						// Step 4b.
						// Link to GitHub credential.
						// As we have access to the pending credential, we can directly call the link method.
						result.user.link(pendingCred).then(() => {
							// GitHub account successfully linked to the existing Firebase user.
							authenticate();
							redirect();
						});
					});
				});
			}
			// ...
		});
	};
	return (
		<button className="btn btn" type="button" onClick={ () => signIn() }>
			<span className="icon icon-github-with-circle" />
			<span /> Sign in with Github
		</button>
	);
};

export default connect(({ user }) => ({ user }), actions)(GithubAuth);
