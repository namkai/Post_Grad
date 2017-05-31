import React from 'react';
import { connect } from 'react-redux';
import Project from './Project';

// Renders list of user projects <--- Currently only used in Profile Page
const ProjectList = ({ projects }) => {
	const renderProjects = projects.projects.map(project => <Project { ...project } />);
	return (
		<div className="container my-4">
			<div className="card-deck">
				<div className="row">
					{renderProjects}
				</div>
			</div>
		</div>
	);
};

export default connect(({ projects }) => ({ projects }))(ProjectList);
