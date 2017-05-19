'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('challenge_test', function(table) {
        table.increments('challenge_test_id').primary();
        table.integer('coding_challenge_id').unsigned().notNullable();
        table.foreign('coding_challenge_id').references('coding_challenge_id').inTable('coding_challenges').onDelete('cascade');
        table.string('challenge_name').notNullable().defaultTo('');
        table.text('challenge_instructions').notNullable().defaultTo('');
        table.integer('challenge_difficulty').notNullable().defaultTo(0);
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('challenge_test')
    ]);
};
