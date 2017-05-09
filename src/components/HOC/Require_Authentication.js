import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
	class Authentication extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		};
		componentWillMount(){
			if(!this.props.authenticated)
			this.context.router.history.push('/auth')
		}
		componentWillUpdate(nextProps){
			if(!nextProps.authenticated)
				this.context.router.history.push('/auth')
		}
		render() {
			return (
				<ComposedComponent {...this.props} />
			);
		}
	}

	return connect(({ authenticated }) => ({ authenticated }))(Authentication);
}

