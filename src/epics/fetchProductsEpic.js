import { ajax } from 'rxjs/observable/dom/ajax';
import * as type from '../constants/actionTypes';
import * as url from '../constants/urlTypes';
import { fetchItemsFulfilled } from '../actions/product_actions';

const fetchProductsEpic = action$ =>
	action$.ofType(type.FETCH_ITEMS)
		.mergeMap(action =>
			ajax.getJSON(url.POPULAR)
				.takeUntil(action$.ofType(type.CANCEL_SEARCH))
				.map(response => fetchItemsFulfilled(response)));

export default fetchProductsEpic;
