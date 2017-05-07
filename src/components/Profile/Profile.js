import React from 'react';
import ProfileAbout from './ProfileAbout';
import ProfileModal from './ProfileModal';

const Profile = () => {
	return (
		<div>
			<ProfileModal/>
		<div className="container pt-4">
			<div className="row">
				<ProfileAbout/>
			</div>
		</div>
		</div>
	);
};


export default Profile;
