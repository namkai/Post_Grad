import React from 'react';
import { connect } from 'react-redux';
import projectsSelector from '../../../Selectors/SelectedProjects';
import PostList from './PostList';
import SubmitPost from './SubmitPost';

const FeedStream = ({ projects }) => {
	return (
		<div className="col-lg-6">
			<ul className="list-group media-list media-list-stream mb-4">
				<SubmitPost />
				<PostList posts={ projects } />
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		projects: projectsSelector(state),
	};
};

export default connect(mapStateToProps)(FeedStream);