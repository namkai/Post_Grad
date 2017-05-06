import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

const ProductList = ({ products }) => {
	const generateProductList = () => products.map(item => (<Product { ...item } key={ item.id } />));
	return (
		<div>{generateProductList()}</div>
	);
};

export default connect(({ products }) => ({ products }))(ProductList);
