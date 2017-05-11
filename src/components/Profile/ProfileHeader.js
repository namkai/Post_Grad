import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileHeader = ({ user }) => (
	<div className="profile-header" style={ { backgroundImage: `url(${ user.backgroundPhoto })` } }>
		<div className="container">
			<div className="container-inner">
				<img className="rounded-circle media-object" alt="" src={ user.profilePhoto }/>
				<h3 className="profile-header-user">{user.name}</h3>
				<p className="profile-header-bio">
					{user.bio}
				</p>
			</div>
		</div>

		<nav className="profile-header-nav">
			<ul className="nav nav-tabs justify-content-center">
				<li className="nav-item">
					<Link className="nav-link active" to="/profile/projects">Projects</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/profile/posts" >Posts</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="#">Anothers</Link>
				</li>
			</ul>
		</nav>
	</div>
);

export default connect(({ user }) => ({ user }))(ProfileHeader);
