import React from 'react';
import { connect } from 'react-redux';
import Project from './Project';

const ProjectList = ({ projects }) => {
	const renderProjects = projects.projects.map(project => <Project { ...project } />);
	return (
		<div className="container my-4">
			{renderProjects}
		</div>
	);
};

export default connect(({ projects }) => ({ projects }))(ProjectList);
