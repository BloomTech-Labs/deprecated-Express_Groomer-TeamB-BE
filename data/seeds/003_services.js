exports.seed = async function (knex) {
  await knex('services').insert([
    {
      service_name: 'Bath',
      services_price: '$50',
    },
    {
      service_name: 'Fur-Trimming',
      services_price: '$70',
    },
    {
      service_name: 'Nail-Trimming',
      services_price: '$50',
    },
    {
      service_name: 'Fur-Styling',
      services_price: '$30',
    },
    {
      service_name: 'Ear Cleaning',
      services_price: '$35',
    },
    {
      service_name: 'Nail Filing',
      services_price: '$30',
    },
    {
      service_name: 'Nail-Capping',
      services_price: '$50',
    },
  ]);
};
