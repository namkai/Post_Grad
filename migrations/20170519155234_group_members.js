'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('group_members', function(table) {
        table.increments('group_members_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.integer('group_id').unsigned().notNullable();
        table.foreign('group_id').references('group_id').inTable('groups').onDelete('cascade');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('group_members')
    ]);
};
