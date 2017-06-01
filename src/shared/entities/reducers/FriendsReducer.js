import initialState from '../../initialState/initialState';
import * as type from '../constants/actionTypes';

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
