import React from 'react';

const Product = ({ name, product_image_url, size, brand_name }) => {
	console.log(`Product`);
	return (
		<div className="col-sm-4">
			<div className="card">
				<img className="card-img-top" src={product_image_url} alt="Card image cap" style={{height: 150}}/>
				<div className="card-block">
					<h4 className="card-title">{brand_name}</h4>
					<p className="card-text">{name}</p>
					<a href="#" className="btn btn-primary">Add to cart</a>
				</div>
			</div>
		</div>
	);
};

export default Product;
