import React from 'react';

const ProfileBody = () => (
	<div className="card visible-md-block visible-lg-block mb-4">
		<div className="card-block">
			<h6 className="mb-3">About
				<small>· <a href="#">Edit</a></small>
			</h6>
			<ul className="list-unstyled list-spaced">
				<li><span className="text-muted icon icon-calendar mr-3"/>Went to <a href="#">Oh, Canada</a></li>
				<li><span className="text-muted icon icon-users mr-3"/>Became friends with <a href="#">Obama</a></li>
				<li><span className="text-muted icon icon-github mr-3"/>Worked at <a href="#">Github</a></li>
				<li><span className="text-muted icon icon-home mr-3"/>Lives in <a href="#">San Francisco, CA</a></li>
				<li><span className="text-muted icon icon-location-pin mr-3"/>From <a href="#">Seattle, WA</a></li>
			</ul>
		</div>
	</div>
);

export default ProfileBody;
