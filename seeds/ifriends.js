exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('friends').del().then(() =>
		// Inserts seed entries
		knex('friends').insert([
			{
				user_id: 1,
				friend_user_id: 2,
			}, {
				user_id: 2,
				friend_user_id: 1,
			}, {
				user_id: 3,
				friend_user_id: 1,
			},
			{
				user_id: 1,
				friend_user_id: 3,
			},
		]));
};
