import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/product_actions';

class Welcome extends Component {
	componentWillMount() {
		this.props.fetchItems();
	}
	render() {
		return (
			<div>Welcome</div>
		);
	}
}

export default connect(null, { fetchItems })(Welcome);
