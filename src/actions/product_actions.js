import * as type from '../constants/actionTypes';

export const fetchItems = () => ({ type: type.FETCH_ITEMS });

export const fetchItemsFulfilled = payload => ({ type: type.LOAD_ITEMS, payload });

export const addItem = payload => ({ type: type.ADD_ITEM, payload });

export const removeItem = payload => ({ type: type.REMOVE_ITEM, payload });
