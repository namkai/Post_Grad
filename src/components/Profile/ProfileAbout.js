import React from 'react';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import ProfilePhotos from './ProfilePhotos';

const ProfileAbout = () => (
	<div className="col-lg-3">
		<ProfileHeader />
		<ProfileBody />
		<ProfilePhotos />
	</div>
);

export default ProfileAbout;
