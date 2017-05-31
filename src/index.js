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

import requireAuth from './Shared/HOC/Require_Authentication';
import LoginForm from './Shared/Components/Authentication/Components/LoginForm';
import ProjectList from './Pages/Profile/Components/ProjectList';
import App from './Pages/App';
import Room from './Pages/CodeRoom';
import Feed from './Pages/Feed/index';
import Profile from './Pages/Profile/index';
import configureStore from './Store/configureStore';

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
