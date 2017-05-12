import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter as Router, Route } from 'react-router-dom';
import '../style/v4/dist/toolkit.css';
import About from './components/About';

import App from './components/App';
import requireAuth from './components/HOC/Require_Authentication';
import LoginForm from './components/LoginForm';
import ProjectList from './components/ProjectList';
import Room from './pages/CodeRoom';
import Feed from './pages/Feed/index';
import Profile from './pages/Profile/Profile';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<div>
				<Route path="/" component={ App }/>
				<Route path="/feed" component={ requireAuth(Feed) }/>
				<Route path="/auth" component={ LoginForm }/>
				<Route path="/room" component={ Room }/>
				<Route path="/profile" component={ Profile }/>
				<Route path="/profile/projects" component={ ProjectList }/>
				<Route path="/profile/about" component={ About }/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root'));
