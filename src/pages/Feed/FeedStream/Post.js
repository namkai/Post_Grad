import React from 'react';

const Post = ({name, photo, text, timeStamp}) => {
	return (
		<li className="media list-group-item p-4">
			<img
				className="media-object d-flex align-self-start mr-3"
				src={photo} />
			<div className="media-body">
				<div className="media-body-text">
					<div className="media-heading">
						<small className="float-right text-muted">{ timeStamp }</small>
						<h6>{name}</h6>
					</div>
					<p>
						{text}
					</p>
				</div>
			</div>
		</li>
	);
};

export default Post;