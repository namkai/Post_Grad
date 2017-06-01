import friend from './FriendsReducer';
import projects from './ProjectsReducer';
import user from './UserReducer';

export default function (state, action) {
  state = friend(state, action);
  state = projects(state, action);
  state = user(state, action);
  return state;
}
