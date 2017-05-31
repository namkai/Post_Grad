import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../Roots/rootReducer';
import rootEpic from '../Roots/rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => createStore(
	rootReducer,
	applyMiddleware(epicMiddleware),
);

export default configureStore;
