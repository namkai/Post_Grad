import React from 'react';
import iceland from '../../../style/v4/docs/assets/img/iceland.jpg';
import headshot from '../../../style/assets/headshot-namkai.jpg';

const ProfileHeader = () => (
	<div className="card card-profile mb-4">
		<div className="card-header" style={ { backgroundImage: { iceland } } } />
		<div className="card-block text-center">
			<a href="profile/index.html">
				<img
  className="card-profile-img"
  src={headshot}
				/>
			</a>

			<h6 className="card-title">
				<a className="text-inherit" href="profile/index.html">Dave Gamache</a>
			</h6>

			<p className="mb-4">I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.</p>

			<ul className="card-menu">
				<li className="card-menu-item">
					<a href="#userModal" className="text-inherit" data-toggle="modal">
							Friends
							<h6 className="my-0">12M</h6>
					</a>
				</li>

				<li className="card-menu-item">
					<a href="#userModal" className="text-inherit" data-toggle="modal">
							Enemies
							<h6 className="my-0">1</h6>
					</a>
				</li>
			</ul>
		</div>
	</div>
	);

export default ProfileHeader;
