exports.up = function(knex) {
  return knex.schema.createTable('mac_vendor', table => {
    table.string('id').primary();
    table.string('mac').notNullable();
    table.string('vendor').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('mac_vendor');
};