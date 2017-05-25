import { takeEvery } from 'redux-saga/effects';
import { getPostsData } from './PostsSaga';
import * as types from '../Constants/actionTypes';

export default function* watchResponseData() {
  yield takeEvery(types.FETCH_POSTS, getPostsData);
}
