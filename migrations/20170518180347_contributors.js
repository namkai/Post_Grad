'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contributors', function(table) {
        table.increments('portfolio_id').primary();
        table.integer('contributors_user_id').unsigned().notNullable();
        table.foreign('contributors_user_id').references('user_id').inTable('users').onDelete('cascade');
        table.integer('project_id').unsigned().notNullable();
        table.foreign('project_id').references('project_id').inTable('projects').onDelete('cascade');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('portfolio')
    ]);
};
