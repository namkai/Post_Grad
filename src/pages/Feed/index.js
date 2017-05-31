import React from 'react';
import FeedAbout from './Components/FeedAbout/index';
import FeedStream from './Components/FeedStream/index'

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
