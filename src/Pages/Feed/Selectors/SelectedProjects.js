import { createSelector } from 'reselect';

const userProjects = state => state.projects.projects;

const friendsProjects = ({ friends }) => friends.map(friend => friend.posts.reduce((total = [], current) => total.concat.apply([], current)));

const getAllProjects = (user, friends) => [...user, ...friends].sort((a, b) => a.timeStamp - b.timeStamp);

export default createSelector(
	userProjects,
	friendsProjects,
	getAllProjects,
);

