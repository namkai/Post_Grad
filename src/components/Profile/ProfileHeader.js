import React from 'react';
import { connect } from 'react-redux';

const ProfileHeader = ({ user }) => (
	<div className="profile-header" style={ { backgroundImage: `url(${ user.backgroundPhoto })` } }>
		<div className="container">
			<div className="container-inner">
				<img className="rounded-circle media-object" src={user.profilePhoto} />
				<h3 className="profile-header-user">{user.name}</h3>
				<p className="profile-header-bio">
					{user.bio}
						</p>
			</div>
		</div>

		<nav className="profile-header-nav">
			<ul className="nav nav-tabs justify-content-center">
				<li className="nav-item active">
					<a className="nav-link" href="#">Projects</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Others</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Anothers</a>
				</li>
			</ul>
		</nav>
	</div>
	);

export default connect(({ user }) => ({ user }))(ProfileHeader);
