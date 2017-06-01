import friend from './friends/reducers/index';
import projects from './projects/reducers/index';
import user from './user/reducers/UserReducer';

export default function (state, action) {
	state = friend(state, action);
	state = projects(state, action);
	state = user(state, action);
	return state;
}
