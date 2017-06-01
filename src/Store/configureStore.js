import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../shared/roots/rootReducer';
import rootEpic from '../shared/roots/rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => createStore(
	rootReducer,
	applyMiddleware(epicMiddleware),
);

export default configureStore;
