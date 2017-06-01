import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter as Router, Route } from 'react-router-dom';
import 'rxjs';
import '../style/v4/dist/toolkit.css';
import '../style/v4/dist/toolkit.js';
import '../style/v4/docs/assets/js/application.js';
import '../style/v4/docs/assets/js/chart.js';
import '../style/v4/docs/assets/js/tether.min.js';
import App from './pages/App';
import Room from './pages/CodeRoom';
import Feed from './pages/Feed/index';
import ProjectList from './pages/Profile/Components/ProjectList';
import Profile from './pages/Profile/index';
import LoginForm from './pages/LogIn/components/LoginForm';

import requireAuth from './shared/components/hoc/Require_Authentication';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={App} />
        <Route path="/feed" component={requireAuth(Feed)} />
        <Route path="/auth" component={LoginForm} />
        <Route path="/room" component={Room} />
        <Route path="/profile" component={Profile} />
        <Route path="/profile/projects" component={ProjectList} />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
