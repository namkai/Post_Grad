'use strict';
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('contributors').del().then(function() {
        // Inserts seed entries
        return knex('contributors').insert([
            {
                contributors_user_id: 1,
                project_id:6,
            }, {
                contributors_user_id: 2,
                project_id:6
            }
        ]);
    });
};
