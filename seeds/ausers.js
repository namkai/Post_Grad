'use strict';
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del().then(function() {
        // Inserts seed entries
        return knex('users').insert([
            {
                first_name: 'Trevor',
                last_name: 'Pellegrini',
                email: 'trevorpellegrini@gmail.com',
                username: 'Trevor P',
                age: 25,
                hashed_password: 'grad'
            }, {
                first_name: 'Namkai',
                last_name: 'Fairfield',
                email: 'Namkai@gmail.com',
                username: 'Namski',
                age: 25,
                hashed_password: 'grad'
            }, {
                first_name: 'Yubo',
                last_name: 'Diwu',
                email: 'Yubo@gmail.com',
                username: 'YD',
                age: 25,
                hashed_password: 'grad'
            }
        ]);
    });
};
