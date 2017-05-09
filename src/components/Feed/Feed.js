import React from 'react';
import ProfileAbout from './FeedAbout';
import ProfileModal from './FeedModal';
import requireAuth from '../HOC/Require_Authentication';

const Profile = () => {
	return (
		<div>
		<div className="container pt-4">
			<div className="row">
				<ProfileAbout/>
			</div>
		</div>
		</div>
	);
};

export default requireAuth(Profile);
