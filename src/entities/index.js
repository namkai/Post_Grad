import createEntityReducer from '../shared/hor/createEntityReducer';

const friends = createEntityReducer('friends');
const projects = createEntityReducer('projects');
const messages = createEntityReducer('messages');
const posts = createEntityReducer('posts');


const userEntity = (state, action) => {
	state = friends(state, action);
	state = projects(state, action);
	state = messages(state, action);
	state = posts(state, action);
	return state;
};

export default userEntity;
