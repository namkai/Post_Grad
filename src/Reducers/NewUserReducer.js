import * as type from '../Constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.newUser, action) {
	switch (action.type) {
	case type.ADD_USER:
		return action.payload;
	default:
		return state;
	}
}
