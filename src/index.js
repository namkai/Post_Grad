import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter as Router, Route } from 'react-router-dom';
import '../style/v4/dist/toolkit.css';
import '../style/v4/dist/toolkit.js';
import '../style/v4/docs/assets/js/tether.min.js'
import '../style/v4/docs/assets/js/application.js'
import "../style/v4/docs/assets/js/chart.js"

import About from './components/About';
import App from './pages/App';
import requireAuth from './components/HOC/Require_Authentication';
import LoginForm from './components/LoginForm';
import ProjectList from './components/ProjectList';
import Room from './pages/CodeRoom';
import Feed from './pages/Feed/index';
import Profile from './pages/Profile/index';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<div>
				<Route path="/" component={ App } />
				<Route path="/feed" component={ requireAuth(Feed) } />
				<Route path="/auth" component={ LoginForm } />
				<Route path="/room" component={ Room } />
				<Route path="/profile" component={ Profile } />
				<Route path="/profile/projects" component={ ProjectList } />
				<Route path="/profile/about" component={ About } />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root'));
