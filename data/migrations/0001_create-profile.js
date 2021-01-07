exports.up = (knex) => {
  return (
    knex.schema
      // .raw Section causes an error
      // Error: CREATE EXTENSION IF NOT EXISTS "uuid-ossp" - SQLITE_ERROR: near "EXTENSION": syntax error
      // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .createTable('profiles', function (table) {
        table.string('id').notNullable().unique().primary();
        table.string('email');
        table.string('name');
        table.string('avatarUrl');
        table.timestamps(true, true);
        table.string('role').notNullable();
      })
  );
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles');
};
