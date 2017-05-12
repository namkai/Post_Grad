import React from 'react';
import { connect } from 'react-redux';

const FeedBody = ({ user, newUser }) => (
	<div className="card visible-md-block visible-lg-block mb-4">
		<div className="card-block">
			<h6 className="mb-3">About
				<small>· <a href="#">Edit</a></small>
			</h6>
			<ul className="list-unstyled list-spaced">
				<li><span className="text-muted icon icon-calendar mr-3"/>Went to <a href="#">{user.about.lives}</a></li>
				<li><span className="text-muted icon icon-users mr-3"/>Became friends with <a href="#">Obama</a></li>
				<li><span className="text-muted icon icon-github mr-3"/>Worked at <a href="#">{user.about.work}</a></li>
				<li><span className="text-muted icon icon-home mr-3"/>Lives in <a href="#">{user.about.lives}</a></li>
				<li><span className="text-muted icon icon-location-pin mr-3"/>From <a href="#">{user.about.hometown}</a></li>
			</ul>
		</div>
	</div>
);

export default connect(({ user, newUser }) => ({ user, newUser }))(FeedBody);
