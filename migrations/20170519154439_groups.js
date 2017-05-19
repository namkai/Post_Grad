'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('groups', function(table) {
        table.increments('group_id').primary();
        table.string('group_name').notNullable().defaultTo('');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('groups')
    ]);
};
