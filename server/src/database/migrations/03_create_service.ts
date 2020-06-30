import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('service_orders', table => {
        table.increments('id').primary();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users');
        table.integer('tool_id')
            .notNullable()
            .references('id')
            .inTable('tools');
        table.float("price",8,2).notNullable();
        table.integer('nf').notNullable();
        table.string('description');    
    });
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('service_orders')
}