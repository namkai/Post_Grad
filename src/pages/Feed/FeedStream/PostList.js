import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
//	const renderPosts = posts.map(post => <Post { ...post } />);
	return (
		<div>
			<Post />
		</div>
	);
};

export default PostList;
