exports.up = async (knex) => {
  await knex.schema.createTable('customer', (table) => {
    table.increments('id');
    table.string('user_id').unique().references('id').inTable('profiles');
    table.string('given_name').notNull();
    table.string('family_name').notNull();
    table.varchar('phone_number').notNull();
    table.varchar('address');
    table.varchar('city');
    table.varchar('state');
    table.varchar('zip_code');
    table.varchar('country');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('customer');
};
