import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../roots/rootReducer';
import rootEpic from '../roots/rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => createStore(
	rootReducer,
	applyMiddleware(epicMiddleware),
);

export default configureStore;
