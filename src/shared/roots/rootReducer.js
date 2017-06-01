import { combineReducers } from 'redux';
import authenticated from '../../entities/authentication/reducers/index';
import projects from '../../entities/projects/reducers/index';
import user from '../../entities/user/reducers/UserReducer';
import friends from '../../entities/friends/reducers/index';
import conversations from '../../pages/Conversations/Reducers/ConversationsReducer';
import messages from '../../pages/Conversations/Reducers/MessagesReducer';

const rootReducer = combineReducers({
	user,
	authenticated,
	projects,
	friends,
	conversations,
	messages,
});

export default rootReducer;
