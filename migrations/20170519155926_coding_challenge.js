'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('coding_challenges', function(table) {
        table.increments('coding_challenge_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.string('challenge_name').notNullable().defaultTo('');
        table.text('challenge_instructions').notNullable().defaultTo('');
        table.integer('challenge_difficulty').notNullable().defaultTo(0);
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('coding_challenges')
    ]);
};
