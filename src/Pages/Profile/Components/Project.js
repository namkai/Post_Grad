import React from 'react';

const Project = ({ name, repo, website, description, technologies, photo }) => {
	return (
		<div className="card card-profile">
			<div className="card-header" >
				<h4 className="card-title text-center">
					<a className="text-inherit" href="profile/index.html">{name}</a>
				</h4>
			</div>
			<div className="card-block text-center">
				<a href="/profile/projects">
					<img
						className="card-profile-img"
						src={ photo }
					/>
				</a>
				<p className="mb-4">{description}</p>

				<ul className="card-menu">
					<li className="card-menu-item">
						<a href={website} className="text-inherit" data-toggle="modal">
							Website
						</a>
					</li>

					<li className="card-menu-item">
						<a href={repo} className="text-inherit" data-toggle="modal">
							Repo
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Project;
