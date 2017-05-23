import React from 'react';
import FeedAbout from './FeedAbout/';
import FeedStream from './FeedStream'

export const Profile = () => (
	<div>
		<div className="container pt-4">
			<div className="row">
				<FeedAbout />
				<FeedStream />
			</div>
		</div>
	</div>
);

export default Profile;
