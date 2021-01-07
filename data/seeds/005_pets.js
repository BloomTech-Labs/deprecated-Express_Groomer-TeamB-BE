/* eslint-disable prettier/prettier */
exports.seed = async function (knex) {
  await knex('pets').insert([
    {
      vet_name: 'Dr. Doggy Fixer',
      vet_number: '318-949-2045',
      pet_name: 'Fido',
      pet_picture: '',
      pet_breed: 'Chihuahua',
      pet_color: 'Golden',
      pet_gender: 'Male',
      spay_neuter: true,
      special_requests: 'Please give him a little cowboy bandana',
      pet_temperament: 'Gentle',
      shots_current: true,
    },
  ]);
};
