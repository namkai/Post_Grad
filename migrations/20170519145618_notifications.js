'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notifications', function(table) {
        table.increments('notification_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.integer('notification_user_id').unsigned().notNullable();
        table.foreign('notification_user_id').references('user_id').inTable('users').onDelete('cascade');
        table.string('title').notNullable('').defaultTo('');
        table.text('notification_body').notNullable('').defaultTo('');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('notifications')
    ]);
};
