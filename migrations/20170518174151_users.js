'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments('user_id').primary();
        table.string('first_name').notNullable().defaultTo('');
        table.string('last_name').notNullable().defaultTo('');
        table.string('email').notNullable().unique();
        table.string('username').notNullable().unique(); 
        table.integer('age').notNullable().defaultTo(13);
        table.specificType('hashed_password', 'char(60)').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ]);
};
