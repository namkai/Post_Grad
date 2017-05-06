import * as type from '../constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.products, action) {
	switch (action.type) {
	case type.LOAD_ITEMS:
		return [ ...action.payload ];
	case type.ADD_ITEM:
		return [ ...state, action.payload ];
	case type.REMOVE_ITEM:
		return action.payload;
	default:
		return state;
	}
}
