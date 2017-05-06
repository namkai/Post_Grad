import { combineEpics } from 'redux-observable';

import fetchProductsEpic from './fetchProductsEpic';

const rootEpic = combineEpics(fetchProductsEpic);

export default rootEpic;
