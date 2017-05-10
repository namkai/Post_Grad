import * as type from '../constants/actionTypes';

export const fetchItemsFulfilled = payload => ({ type: type.LOAD_ITEMS, payload });