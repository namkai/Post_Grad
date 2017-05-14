import React from 'react';
import { connect } from 'react-redux';
import SubmitPost from './SubmitPost';
import PostList from './PostList';

const FeedStream = (props) => {
	return (
		<div className="col-lg-6">
			<ul className="list-group media-list media-list-stream mb-4">
				<SubmitPost />
				<PostList />
			</ul>
		</div>
	);
};


export default connect()(FeedStream);