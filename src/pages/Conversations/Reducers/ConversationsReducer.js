import * as type from '../Constants/actionTypes';
import initialState from '../../../shared/initialState/initialState';

export default function (state = initialState.conversations, action) {
  switch (action.type) {
    case type.ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
