'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('friends', function(table) {
        table.increments('friend_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.integer('friend_user_id').unsigned().notNullable();
        table.foreign('friend_user_id').references('user_id').inTable('users').onDelete('cascade');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('friends')
    ]);
};
