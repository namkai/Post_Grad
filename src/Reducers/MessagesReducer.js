import * as type from '../Constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.conversations[ 0 ].messages, action) {
	switch (action.type) {
	case type.SELECTED_MESSAGE:
		return action.payload;
	default:
		return state;
	}
}
