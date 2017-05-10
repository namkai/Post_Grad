import { auth } from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
	class Authentication extends Component {
		static contextTypes = {
			router: React.PropTypes.object,
		};

		componentWillMount() {
			console.log(auth().currentUser, `i'm the current user`)
			if (auth().currentUser === null) {
				this.context.router.history.push('/auth');
			}
		}

		componentWillUpdate(nextProps) {
			if (auth().currentUser === null) {
				this.context.router.history.push('/auth');
			}
		}

		render() {
			return (
				<ComposedComponent {...this.props} />
			);
		}
	}

	return connect(({ authenticated }) => ({ authenticated }))(Authentication);
}


