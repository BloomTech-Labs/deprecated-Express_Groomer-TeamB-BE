exports.up = async (knex) => {
  await knex.schema.createTable('groomer_schedule', (table) => {
    table.increments('id');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('groomer_schedule');
};
