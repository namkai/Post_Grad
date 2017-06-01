import initialState from '../../initialState/initialState';

export default function (state = initialState.user, action) {
	console.log(action, `i'm the action!`)
	switch (action.type) {
	default:
		return state;
	}
}
