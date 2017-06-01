import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as type from '../actionTypes';
import * as api from '../../entities/constants/api';

const addUserEpic = action$ =>
	action$.ofType(type.ADD_USER)
		.mergeMap(action => ajax(`/${api.USER}1`)
			.map(payload => ({ type: type.ADD_USER_SUCCESS, payload }))
			.takeUntil(action$.ofType(type.ADD_USER_ABORTED))
			.catch(error => Observable.of({ type: type.ADD_USER_FAILED, error }))
			.startWith({ type: type.USER_PENDING }));

export default addUserEpic;

