import React from 'react';

const Photo = ({ photo }) => (
	<div className="col-md-6">
		<img width={ '100%' } height={ '100%'} data-action={ 'zoom' } src={ photo } />
	</div>
);

export default Photo;
