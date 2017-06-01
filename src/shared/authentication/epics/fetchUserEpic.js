import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as type from '../../entities/constants/actionTypes';
import * as api from '../../entities/constants/api';

const fetchUserEpic = action$ =>
	action$.ofType(type.ADD_USER)
		.mergeMap(action => ajax(`/${api.USER}1`)
			.map(payload => ({ type: type.ADD_USER_SUCCESS, payload }))
			.takeUntil(action$.ofType('FETCH_USER_ABORTED'))
			.catch(error => Observable.of({ type: type.ADD_USER_FAILED, error }))
			.startWith({ type: type.ADD_USER_PENDING }));

export default fetchUserEpic;

