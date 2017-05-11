import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import authenticated from './authentication_reducer';
import newUser from './newuser_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
	firebase,
	user,
	authenticated,
	newUser,
});

export default rootReducer;
