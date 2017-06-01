exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('portfolio').del().then(() =>
		// Inserts seed entries
		knex('portfolio').insert([
			{
				user_id: 1,
				bio: 'As a programmer I love what I do and I do it well. I have 2 years front end and 1 year server side database development using node.js and PostgreSQL. The past 6 months I have been working in React.js-Redux(game changer). I am constantly learning new things and would love to learn something new to make me a better fit for this position.',
				employee_status: 'Looking',
				portfolio_skin: 1,
			}, {
				user_id: 2,
				bio: 'Likes react a lot',
				employee_status: 'Looking',
				portfolio_skin: 1,
			}, {
				user_id: 3,
				bio: 'He finished Q 3 in half the time',
				employee_status: 'Looking',
				portfolio_skin: 1,
			},
		]));
};
