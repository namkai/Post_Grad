'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('project_id').primary();
        table.integer('portfolio_id').unsigned().notNullable();
        table.foreign('portfolio_id').references('portfolio_id').inTable('portfolio').onDelete('cascade');
        table.string('title').notNullable().defaultTo('');
        table.string('project_photo').notNullable().defaultTo('');
        table.text('description').notNullable().defaultTo('');
        table.text('technologies').notNullable().defaultTo('');
        table.string('live_site').notNullable().defaultTo('');
        table.string('github').notNullable().defaultTo('');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('projects')
    ]);
};
