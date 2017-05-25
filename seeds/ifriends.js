'use strict';
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('friends').del().then(function() {
        // Inserts seed entries
        return knex('friends').insert([
            {
                user_id: 1,
                friend_user_id: 2
            }, {
                user_id: 2,
                friend_user_id: 1
            }, {
                user_id: 3,
                friend_user_id: 1
            },
            {
                user_id: 1,
                friend_user_id: 3
            }
        ]);
    });
};
