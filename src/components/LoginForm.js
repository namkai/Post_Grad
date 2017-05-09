import firebase from 'firebase';
import React, { Component } from 'react';
import logo from '../../style/v4/docs/assets/img/brand.png';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: '',
		};
	}

	onButtonPress = (event) => {
		console.log(`i'm hit!`)
		event.preventDefault();
		const { email, password } = this.state;
		console.log(email, password);

		firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
			console.log('i\'m the error', error);
			firebase.auth().createUserWithEmailAndPassword(email, password).catch((NewError) => {
				console.log('I\'m the error to create a user', NewError);
				this.setState({ error: 'Authentication Failed.' });
			});
		});
	}

	render() {
		return (
			<div className="container-fluid container-fill-height">
				<div className="container-content-middle">
					<form className="mx-auto text-center app-login-form" style={ { marginBottom: 150 } }>
						<a href="../index.html" className="app-brand mb-5">
							<img src={ logo } alt="brand" style={ { height: 30, marginBottom: 20 } }/>
						</a>

						<div className="form-group">
							<input
								style={ style.inputStyle }
								type="email"
								className="form-control"
								placeholder="Email"
								value={ this.state.email }
								onChange={(e) => {
									const email = e.target.value;
									return this.setState({ email });
								}}
							/>
						</div>

						<div className="form-group mb-3">
							<input
								style={ style.inputStyle }
								type="password" className="form-control"
								placeholder="Password"
								value={ this.state.password }
								onChange={(e) => {
									const password = e.target.value
									return this.setState({ password });
								}}
							/>
						</div>

						<div className="mb-5">
							<button className="btn btn-primary" onClick={ this.onButtonPress }>Log In</button>
							<button className="btn btn-secondary">Sign up</button>
						</div>
						<div className="mb-5">
							<p style={style.errorTextStyle}>{this.state.error}</p>
						</div>

						<footer className="screen-login">
							<a href="#" className="text-muted">Forgot password</a>
						</footer>
					</form>
				</div>
			</div>
		);
	}
}

const style = {
	inputStyle: {
		width: '20%',
		margin: '0 auto',
	},
	errorTextStyle: {
		alignSelf: 'center',
		color: 'red',
		fontWeight: 'bold'
	}
};

export default LoginForm;
