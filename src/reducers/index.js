import { combineReducers } from 'redux';
import authenticated from './authentication_reducer';
import newUser from './newuser_reducer';
import projects from './projects_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
	user,
	authenticated,
	newUser,
	projects,
});

export default rootReducer;
