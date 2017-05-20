import * as type from '../constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.messages, action) {
	switch (action.type) {
	case type.ADD_MESSAGE:
		return [ ...state, action.payload ];
	default:
		return state;
	}
}
