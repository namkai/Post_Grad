import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter as Router, Route } from 'react-router-dom';
import 'rxjs';
import '../style/v4/dist/toolkit.css';

import App from './components/App';
import Feed from './components/Feed/Feed';
import requireAuth from './components/HOC/Require_Authentication';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile/Profile';
import ProjectList from './components/ProjectList';
import About from './components/About';

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<div>
				<Route path="/" component={ App } />
				<Route path="/feed" component={ requireAuth(Feed) } />
				<Route path="/auth" component={ LoginForm } />
				<Route path="/profile" component={ Profile } />
				<Route path="/profile/projects" component={ ProjectList } />
				<Route path="/profile/about" component={ About } />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root'));
