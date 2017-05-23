import * as type from '../constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.conversations, action) {
	switch (action.type) {
	case type.ADD_MESSAGE:
		return [ ...state, action.payload ];
	default:
		return state;
	}
}
