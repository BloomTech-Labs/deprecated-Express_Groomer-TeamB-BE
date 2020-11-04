await knex('services').insert([{
        services_price: '$25.00',
    },
    {
        service_name: 'Fur-Trimming',
    },
    {
        service_name: 'Nail-Trimming',
    },
    {
        service_name: 'Fur-Styling',
    },
    {
        service_name: 'Ear Cleaning',
    },
    {
        service_name: 'Nail Filing',
    },
    {
        service_name: 'Nail-Capping',
    },
]);
};