import * as type from './actionTypes';

export const authenticate = isLoggedIn => ({ type: type.CHANGE_AUTH, payload: isLoggedIn });

export const checkAuthentication = () => ({ type: type.CHECK_AUTHENTICATION });

export const addUser = payload => ({ type: type.ADD_USER, payload }); // <--- Grab user object from firebase.
