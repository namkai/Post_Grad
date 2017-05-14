import React from 'react';

const ListItem = ({ name, location, image }) => (
	<li className="list-group-item">
		<div className="media w-100">
			<img className="media-object d-flex align-self-start mr-3" src={ image } />
			<div className="media-body">
				<button className="btn btn-secondary btn-sm float-right">
					<span className="glyphicon glyphicon-user" /> Follow
					</button>
				<strong>{ name }</strong>
				<p>{ location }</p>
			</div>
		</div>
	</li>
	);

export default ListItem;
