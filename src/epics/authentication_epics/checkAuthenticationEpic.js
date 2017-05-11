import * as type from '../../constants/actionTypes';

const checkAuthenticationEpic = action$ =>
	action$.ofType(type.CHECK_AUTHENTICATION);
