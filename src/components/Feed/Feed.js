import React from 'react';
import requireAuth from '../HOC/Require_Authentication';
import FeedAbout from './FeedAbout';

const Profile = () => (
	<div>
		<div className="container pt-4">
			<div className="row">
				<FeedAbout />
			</div>
		</div>
	</div>
);

export default requireAuth(Profile);
