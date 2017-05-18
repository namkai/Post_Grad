import { createSelector } from 'reselect';

// Grabs staff piece of state from store
const projectsSelector = state => state.projects;

// Grabs tag piece of state from store
const postSelector = state => state.friends;

// Filters the selected staff based on their associated tag
const getFeed = (staff, tag) => staff.filter(s => tag === 'ALL' ? staff : s.tag.includes(tag));

export default createSelector(
	projectsSelector,
	postSelector,
	getFeed,
);
