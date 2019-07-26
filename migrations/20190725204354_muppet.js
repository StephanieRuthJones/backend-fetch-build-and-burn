
exports.up = function (knex) {
    return knex.schema.createTable('muppet', (table) => {
        table.increments('id')
        table.text('name').notNullable().defaultsTo('')
        table.text('image').defaultsTo('')
        table.text('talent').defaultsTo('')
        table.integer('votes').defaultsTo(0)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('muppet')
};
