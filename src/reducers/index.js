import { combineReducers } from 'redux';
import authenticated from './authentication_reducer';
import newUser from './newuser_reducer';
import projects from './projects_reducer';
import user from './user_reducer';
import friends from './friends_reducer';
import messages from './messages_reducer';

const rootReducer = combineReducers({
	user,
	authenticated,
	newUser,
	projects,
	friends,
	messages,
});

export default rootReducer;
