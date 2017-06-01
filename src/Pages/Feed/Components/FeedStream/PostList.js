import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
	const renderPosts = posts.map(post => <Post { ...post } />);
	return (
		<div>
			{renderPosts}
		</div>
	);
};

export default PostList;
