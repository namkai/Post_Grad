import React from 'react';
import ProfileBody from './FeedBody';
import ProfileHeader from './FeedHeader';
import ProfilePhotos from './FeedPhotos';

const ProfileAbout = () => (
	<div className="col-lg-3">
		<ProfileHeader />
		<ProfileBody />
		<ProfilePhotos />
	</div>
);

export default ProfileAbout;
