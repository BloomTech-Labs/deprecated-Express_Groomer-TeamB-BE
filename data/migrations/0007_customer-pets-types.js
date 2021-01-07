exports.up = async (knex) => {
  await knex.schema.createTable('customer_pets_type', (table) => {
    table.string('customer_id').references('user_id').inTable('customer');
    table.bigint('pets_id').references('id').inTable('pets');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('customer_pets_type');
};
