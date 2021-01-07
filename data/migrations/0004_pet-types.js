exports.up = async (knex) => {
  await knex.schema.createTable('pet-types', (table) => {
    table.increments('id');
    table.varchar('breed');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('pet-types');
};
