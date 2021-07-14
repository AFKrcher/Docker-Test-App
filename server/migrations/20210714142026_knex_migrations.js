exports.up = function(knex) {
  return knex.schema.createTable('items', table =>{
      table.increments('id');
      table.string('comment').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items');
};