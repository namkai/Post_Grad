import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

const ProductList = ({ products }) => {
	const generateProductList = () => products.map(item => (<Product { ...item } key={ item.id }/>));

	return (
			<div className="container">{generateProductList()}</div>
	);
};

export default connect(({ products }) => ({ products }))(ProductList);
