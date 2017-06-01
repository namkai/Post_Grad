import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as type from '../constants/actionTypes';
import * as api from '../constants/apiTypes';

const fetchUserEpic = action$ =>
	action$.ofType(type.FETCH_USER)
		.mergeMap(action => ajax(`${api.USER}`)
			.map(payload => ({ type: type.FETCH_USER_SUCCESS, payload }))
			.takeUntil(action$.ofType(type.FETCH_USER_ABORTED))
			.catch(error => Observable.of({ type: type.FETCH_USER_FAILED, error }))
			.startWith({ type: type.USER_PENDING }));

export default fetchUserEpic;

