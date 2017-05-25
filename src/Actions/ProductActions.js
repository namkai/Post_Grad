import * as type from '../Constants/actionTypes';

export const fetchItemsFulfilled = payload => ({ type: type.LOAD_ITEMS, payload });