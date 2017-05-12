import React from 'react';
import FeedBody from './FeedBody';
import FeedHeader from './FeedHeader';
import FeedPhotos from './FeedPhotos';

const ProfileAbout = () => (
	<div className="col-lg-3">
		<FeedHeader />
		<FeedBody />
		<FeedPhotos />
	</div>
);

export default ProfileAbout;
