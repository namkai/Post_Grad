import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import headshot from '../../../style/assets/headshot-namkai.jpg';

const FeedHeader = ({ user }) => (
	<div className="card card-profile mb-4">
		<div className="card-header" style={ { backgroundImage: `url(${ user.backgroundPhoto })` } }/>
		<div className="card-block text-center">
			<Link to="/profile">
				<img
					className="card-profile-img"
					src={ headshot }
				/>
			</Link>

			<h6 className="card-title">
				<a className="text-inherit" href="profile/index.html">{user.name}</a>
			</h6>

			<p className="mb-4">{user.bio}</p>

			<ul className="card-menu">
				<li className="card-menu-item">
					<a href="#userModal" className="text-inherit" data-toggle="modal">
						Friends
						<h6 className="my-0">{user.friends}</h6>
					</a>
				</li>

				<li className="card-menu-item">
					<a href="#userModal" className="text-inherit" data-toggle="modal">
						Projects
						<h6 className="my-0">100</h6>
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default connect(({ user }) => ({ user }))(FeedHeader);
