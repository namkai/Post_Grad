import firebase from 'firebase';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as auth from '../actions/authentication_actions';
import headshot from '../../style/assets/headshot-namkai.jpg';
import logo from '../../style/v4/docs/assets/img/brand-white.png';

const Navbar = ({ authenticate, authenticated }) => {
	const authentication = () => {
		if (authenticated) {
			const logOut = () => {
				authenticate(false);
				firebase.auth().signOut();
			};
			return (
				<button className="btn btn-default navbar-btn navbar-btn-avatar" data-toggle="popover">
					<img className="rounded-circle" src={ headshot } />
				</button>
			);
		}
		return (
			<li className="nav-item">
				<NavLink className="nav-link" to="/auth">Log In</NavLink>
			</li>
		);
	};
	return (
		<nav className="navbar navbar-toggleable-sm fixed-top navbar-inverse bg-primary app-navbar">
			<button
				className="navbar-toggler navbar-toggler-right hidden-md-up"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"/>
			</button>

			<a className="navbar-brand" href="index.html">
				<img src={ logo } alt="brand" style={ { height: 23 } }/>
			</a>

			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<NavLink className="nav-link" to="/feed">Home <span className="sr-only">(current)</span></NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/profile/projects">Profile</NavLink>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-toggle="modal" href="#msgModal">Messages</a>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/room">Code Room</NavLink>
					</li>

					<li className="nav-item hidden-md-up">
						<a className="nav-link" href="notifications/index.html">Notifications</a>
					</li>
					<li className="nav-item hidden-md-up">
						<a className="nav-link" data-action="growl">Growl</a>
					</li>
					<li className="nav-item hidden-md-up">
						<a className="nav-link" href="login/index.html">Logout</a>
					</li>

				</ul>

				<form className="form-inline float-right hidden-sm-down">
					<input className="form-control" type="text" data-action="grow" placeholder="Search"/>
				</form>

				<ul id="#js-popoverContent" className="nav navbar-nav float-right mr-0 hidden-sm-down">
					<li className="nav-item">
						<a className="app-notifications nav-link" href="notifications/index.html">
							<span className="icon icon-bell"/>
						</a>
					</li>
					<li className="nav-item ml-2">
						{authentication()}
					</li>
				</ul>

				<ul className="nav navbar-nav hidden-xs-up" id="js-popoverContent">
					<li className="nav-item"><a className="nav-link" href="#" data-action="growl">Growl</a></li>
					<li className="nav-item"><a className="nav-link" href="login/index.html">Logout</a></li>
				</ul>
			</div>
		</nav>
	);
};

const style = {
	nav: {
		background: 'url({{ relative }}assets/img/kanye.jpg) top center',
		backgroundSize: 'cover',
	},
};

export default connect(({ authenticated }) => ({ authenticated }), auth)(Navbar);
