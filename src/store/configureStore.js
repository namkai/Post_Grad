import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducers';
import rootSaga from '../Sagas';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(rootReducer,
			applyMiddleware(sagaMiddleware)),
		runSaga: sagaMiddleware.run(rootSaga),
	};
};

export default configureStore;
