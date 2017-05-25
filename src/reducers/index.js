import { combineReducers } from 'redux';
import authenticated from './AuthenticationReducer';
import newUser from './NewUserReducer';
import projects from './ProjectsReducer';
import user from './UserReducer';
import friends from './FriendsReducer';
import conversations from './ConversationsReducer';
import messages from './MessagesReducer';

const rootReducer = combineReducers({
	user,
	authenticated,
	newUser,
	projects,
	friends,
	conversations,
	messages,
});

export default rootReducer;
