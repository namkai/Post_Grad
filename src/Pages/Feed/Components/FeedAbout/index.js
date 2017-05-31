import React from 'react';
import { connect } from 'react-redux';

import FeedBody from './FeedBody';
import FeedHeader from './FeedHeader';
import FeedPhotos from './FeedPhotos';
import ListModal from './ListModal';

const ProfileAbout = ({ user, friends, projects }) => (
	<div className="col-lg-3">
		<ListModal title={ 'Friends' } list={ friends } id={ 'userModal' } />
		<ListModal title={ 'Projects' } list={ projects.projects } id={ 'projectsModal' } />
		<FeedHeader user={ user } friends={ friends.length } projects={ projects.projects.length } />
		<FeedBody />
		<FeedPhotos />
	</div>
);

const mapStateToProps = ({ user, friends, projects }) => ({
	user,
	friends,
	projects,
});

export default connect(mapStateToProps)(ProfileAbout);
