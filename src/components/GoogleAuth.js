import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/authentication_actions';

const GoogleAuth = ({ user }) => {

	return (
		<button className="btn btn" type="button">Sign in with Google</button>
	);
};

const mapStateToProps = ({ user }) => ({
	user,
});

export default connect(mapStateToProps, action)(GoogleAuth);