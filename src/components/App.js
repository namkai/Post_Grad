import React from 'react';
import Navbar from './Navbar';
import ProductList from './Product_List/ProductList';
import Welcome from './Welcome';
import Profile from './Profile/Profile';
import ProfileAbout from './Profile/ProfileAbout'

const App = props => (
	<div className="with-top-navbar">
		<div className="growl" id="app-growl"/>
		<Navbar/>
		<ProfileAbout/>
	</div>
);

export default App;
