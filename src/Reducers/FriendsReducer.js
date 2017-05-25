import * as type from '../Constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.friends, action) {
	switch (action.type) {
	case type.ADD_FRIEND:
		return [
			...state,
			action.payload,
		];
	default:
		return state;
	}
}
