'use strict'
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('comments').del().then(function() {
        // Inserts seed entries
        return knex('comments').insert([
            {
                user_id: 1,
                post_id: 4,
                comment_body:'something something something something something something something something something something something something'
            }, {
                user_id: 1,
                post_id: 5,
                comment_body:'something something something something something something something something something something something something'
            }, {
                user_id: 1,
                post_id: 5,
                comment_body:'something something something something something something something something something something something something'
            }, {
                user_id: 2,
                post_id: 1,
                comment_body:'something something something something something something something something something something something something'
            }, {
                user_id: 2,
                post_id: 2,
                comment_body:'something something something something something something something something something something something something'
            }, {
                user_id: 2,
                post_id: 7,
                comment_body:'something something something something something something something something something something something something'
            }, {
                user_id: 3,
                post_id: 1,
                comment_body:'something something something something something something something something something something something something'
            }, {
                user_id: 3,
                post_id: 2,
                comment_body:'something something something something something something something something something something something something'
            }, {
                user_id: 3,
                post_id: 4,
                comment_body:'something something something something something something something something something something something something'
            }
        ]);
    });
};
