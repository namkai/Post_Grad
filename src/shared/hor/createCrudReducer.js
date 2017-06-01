function createCrudReducer(actionName = '') {
	return (state = {}, action) => {
		switch (action.type) {
		case `${actionName}_PENDING`:
			return 'pending';
		case `${actionName}_SUCCESS`:
			return action.payload;
		case `${actionName}_FAILED`:
			return action.payload;
		default:
			return state;
		}
	};
}


export default createCrudReducer;
