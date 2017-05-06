import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';
import rootReducer from '../reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => {
	return createStore(
		rootReducer,
		applyMiddleware(epicMiddleware),
	);
};

export default configureStore;