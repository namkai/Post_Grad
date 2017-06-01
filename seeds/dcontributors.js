exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('contributors').del().then(() =>
		// Inserts seed entries
		knex('contributors').insert([
			{
				contributors_user_id: 1,
				project_id: 6,
			}, {
				contributors_user_id: 2,
				project_id: 6,
			},
		]));
};
