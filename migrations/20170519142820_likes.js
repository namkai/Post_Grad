'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('likes', function(table) {
        table.increments('like_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.integer('post_id').unsigned().notNullable();
        table.foreign('post_id').references('post_id').inTable('post').onDelete('cascade');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('likes')
    ]);
};
