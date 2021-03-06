'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('coding_challenge_likes', function(table) {
        table.increments('coding_challenge_likes_id').primary();
        table.integer('coding_challenge_answer_id').unsigned().notNullable();
        table.foreign('coding_challenge_answer_id').references('coding_challenge_answer_id').inTable('coding_challenge_answers').onDelete('cascade');
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.boolean('like').notNullable().defaultTo(true);
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('coding_challenge_likes')
    ]);
};
