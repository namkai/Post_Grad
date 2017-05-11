import React from 'react';
import { connect } from 'react-redux';

const ProjectList = ({ projects }) => {
	return (
		<div className="container my-4" data-grid="images">
			projects
		</div>
	);
};

export default connect(({ projects }) => ({ projects }))(ProjectList);