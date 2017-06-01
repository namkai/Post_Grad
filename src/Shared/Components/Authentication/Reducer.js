import * as type from './actionTypes';

export default function (state = false, action) {
  switch (action.type) {
    case type.CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}

