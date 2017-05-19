'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('portfolio', function(table) {
        table.increments('portfolio_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.text('bio').notNullable().defaultTo('');
        table.text('employee_status').notNullable().defaultTo('');
        table.integer('portfolio_skin').notNullable().defaultTo(1);
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('portfolio')
    ]);
};
