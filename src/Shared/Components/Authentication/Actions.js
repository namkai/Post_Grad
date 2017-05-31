import * as type from './actionTypes';

export const authenticate = isLoggedIn => ({ type: type.CHANGE_AUTH, payload: isLoggedIn });

export const checkAuthentication = () => ({ type: type.CHECK_AUTHENTICATION })

