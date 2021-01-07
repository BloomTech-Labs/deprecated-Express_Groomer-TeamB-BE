exports.up = async (knex) => {
  await knex.schema.createTable('pets', (table) => {
    table.increments('id');
    // table.bigint('pet_types_id').references('id').inTable('pet_types');
    table.string('customer_id').references('user_id').inTable('customer');
    table.string('vet_name');
    table.string('vet_number');
    table.varchar('pet_name').notNull();
    table.varchar('pet_picture');
    table.varchar('pet_breed');
    table.varchar('pet_color');
    table.varchar('pet_gender').notNull();
    table.boolean('spay_neuter').notNull();
    table.varchar('special_requests', 5000);
    table.varchar('pet_temperament', 500);
    table.boolean('shots_current').notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('pets');
};
