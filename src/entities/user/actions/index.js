import * as type from '../constants/actionTypes';

export const fetchUser = payload => ({ type: type.FETCH_USER, payload }); // <--- Grab user object from firebase.

export const addUser = payload => ({ type: type.ADD_USER, payload }); // <--- Add User to Firebase and Backend.