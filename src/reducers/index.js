import { combineReducers } from 'redux';
import products from './product_reducer';
import user from './user_reducer';
import authenticated from './authentication_reducer';

const rootReducer = combineReducers({
	products,
	user,
	authenticated,
});

export default rootReducer;
