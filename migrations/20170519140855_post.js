'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('post', function(table) {
        table.increments('post_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.string('title').notNullable().defaultTo('');
        table.text('post_body').notNullable().defaultTo('');
        table.string('url_link').notNullable().defaultTo('');
        table.text('image').notNullable().defaultTo('');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('post')
    ]);
};
