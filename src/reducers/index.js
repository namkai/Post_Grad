import { combineReducers } from 'redux';
import user from './user_reducer';
import authenticated from './authentication_reducer';

const rootReducer = combineReducers({
	user,
	authenticated,
});

export default rootReducer;
