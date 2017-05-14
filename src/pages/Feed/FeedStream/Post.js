import React from 'react';

const Post = (props) => {
	return (
		<li className="media list-group-item p-4">
			<img
				className="media-object d-flex align-self-start mr-3"
				src="assets/img/avatar-fat.jpg"/>
			<div className="media-body">
				<div className="media-body-text">
					<div className="media-heading">
						<small className="float-right text-muted">12 min</small>
						<h6>Jacob Thornton</h6>
					</div>
					<p>
						Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere
						velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi
						leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit.
					</p>
				</div>
			</div>
		</li>
	);
};

export default Post;