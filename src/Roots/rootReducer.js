import { combineReducers } from 'redux';
import authenticated from '../Shared/Components/Authentication/Reducer';
import projects from '../Shared/ApiCache/Reducers/ProjectsReducer';
import user from '../Shared/ApiCache/Reducers/UserReducer';
import friends from '../Shared/ApiCache/Reducers/FriendsReducer';
import conversations from '../Pages/Conversations/Reducers/ConversationsReducer';
import messages from '../Pages/Conversations/Reducers/MessagesReducer';

const rootReducer = combineReducers({
	user,
	authenticated,
	projects,
	friends,
	conversations,
	messages,
});

export default rootReducer;
