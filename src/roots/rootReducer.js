import { combineReducers } from 'redux';
import authenticated from '../shared/authentication/Reducer';
import projects from '../shared/entities/reducers/ProjectsReducer';
import user from '../shared/entities/reducers/UserReducer';
import friends from '../shared/entities/reducers/FriendsReducer';
import conversations from '../pages/Conversations/Reducers/ConversationsReducer';
import messages from '../pages/Conversations/Reducers/MessagesReducer';

const rootReducer = combineReducers({
	user,
	authenticated,
	projects,
	friends,
	conversations,
	messages,
});

export default rootReducer;
