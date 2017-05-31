'use strict';
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('direct_messages').del().then(function() {
        // Inserts seed entries
        return knex('direct_messages').insert([
            {
                user_id: 1,
                friend_user_id: 2,
                combined_user_id: '1:2',
                message_body:'trevor message 1'
            }, {
                user_id: 1,
                friend_user_id: 2,
                combined_user_id: '1:2',
                message_body:'trevor message 2'
            }, {
                user_id: 1,
                friend_user_id: 2,
                combined_user_id: '1:2',
                message_body:'trevor message 3'
            }, {
                user_id: 2,
                friend_user_id: 1,
                combined_user_id: '1:2',
                message_body:'namkai message 1'
            }, {
                user_id: 2,
                friend_user_id: 1,
                combined_user_id: '1:2',
                message_body:'namkai message 2'
            }, {
                user_id: 2,
                friend_user_id: 1,
                combined_user_id: '1:2',
                message_body:'namkai message 3'
            }, {
                user_id: 1,
                friend_user_id: 2,
                combined_user_id: '1:2',
                message_body:'trevor message 4'
            },{
                user_id: 1,
                friend_user_id: 3,
                combined_user_id: '1:3',
                message_body:'trevor message 4'
            }
        ]);
    });
};
