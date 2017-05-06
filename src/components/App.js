import React from 'react';
import { connect } from 'react-redux';
import Welcome from './Welcome';
import ProductList from './Product_List/ProductList';

const App = props => (
	<div>
		<Welcome />
		<ProductList/>
	</div>
);

export default connect()(App);
