import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('tools', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
        table.string("description").notNullable();
        table.float("price",8,2).notNullable();
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users');
    });
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('tools')
}