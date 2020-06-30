import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('tools').insert([
        { image: 'tool.png', title: 'Peça teste', description: 'descrição de uma peça desgraça', price: 10.2, user_Id: 0 },
    ]);
}