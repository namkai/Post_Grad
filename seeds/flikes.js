'use strict';
exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('likes').del().then(function () {
		// Inserts seed entries
		return knex('likes').insert([
			{
				user_id: 1,
				post_id: 3,
			}, {
				user_id: 1,
				post_id: 5,
			}, {
				user_id: 1,
				post_id: 7,
			}, {
				user_id: 2,
				post_id: 1,
			}, {
				user_id: 2,
				post_id: 2,
			}, {
				user_id: 3,
				post_id: 1,
			}, {
				user_id: 3,
				post_id: 2,
			}, {
				user_id: 1,
				post_id: 5,
			}, {
				user_id: 1,
				post_id: 4,
			},
		]);
	});
};
