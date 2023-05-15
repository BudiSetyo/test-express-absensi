exports.up = async function (knex) {
    // await knex.raw('create extension if not exists "uuid-ossp"')
    return knex.schema.createTable('users', (table) => {
        table.increments()
        table.string('nik').notNullable().unique().comment('Nik is unique')
        table.string('password').notNullable()
        table.string('name').notNullable()
        table.enu('role', ['admin', 'user'])
        table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}
