exports.seed = async function (knex) {
  // await knex.raw('TRUNCATE TABLE profiles CASCADE');
  // await knex.raw('TRUNCATE TABLE services CASCADE');
  await knex('profiles').truncate();
  await knex('services').truncate();
  await knex('groomer').truncate();
  await knex('customer').truncate();
  await knex('pets').truncate();
};
