exports.up = async (knex) => {
  await knex.schema.createTable('groomer', (table) => {
    table.increments('id');
    table.string('user_id').references('id').inTable('profiles');
    table.string('business_name');
    table.string('given_name').notNull();
    table.string('family_name').notNull();
    table.varchar('phone_number').notNull();
    table.varchar('address').notNull();
    table.varchar('city').notNull();
    table.varchar('state').notNull();
    table.varchar('zip_code').notNull();
    table.varchar('country').notNull();
    table.varchar('about', 5000);
  });
  await knex.schema.createTable('customer', (table) => {
    table.increments('id');
    table.string('user_id').references('id').inTable('profiles');
    table.string('given_name').notNull();
    table.string('family_name').notNull();
    table.varchar('phone_number').notNull();
    table.varchar('address');
    table.varchar('city');
    table.varchar('state');
    table.varchar('zip_code');
    table.varchar('country');
  });
  await knex.schema.createTable('pet_types', (table) => {
    table.increments('id');
    table.varchar('breed');
  });
  await knex.schema.createTable('pets', (table) => {
    table.increments('id');
    table.bigint('pet_types_id').references('id').inTable('pet_types');
    table.bigint('customer_id').references('id').inTable('customer');
    table.string('name').notNullable();
  });
  await knex.schema.createTable('services', (table) => {
    table.increments('id');
    table.string('service_name').notNullable();
  });
  await knex.schema.createTable('groomer_services', (table) => {
    table.bigint('groomer_id').references('id').inTable('groomer');
    table.bigint('services_id').references('id').inTable('services');
    table.varchar('services_price');
  });
  await knex.schema.createTable('customer_pets_type', (table) => {
    table.bigint('customer_id').references('id').inTable('customer');
    table.bigint('pets_id').references('id').inTable('pets');
  });
  await knex.schema.createTable('groomer_schedule', (table) => {
    table.increments('id');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('customer_pets_type');
  await knex.schema.dropTableIfExists('groomer_services');
  await knex.schema.dropTableIfExists('groomer_schedule');
  await knex.schema.dropTableIfExists('services');
  await knex.schema.dropTableIfExists('pets');
  await knex.schema.dropTableIfExists('pet_types');
  await knex.schema.dropTableIfExists('customer');
  await knex.schema.dropTableIfExists('groomer');
};
