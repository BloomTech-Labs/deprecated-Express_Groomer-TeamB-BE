const db = require('../../data/db-config');

const getAll = async () => {
  return await db('groomer_services');
};

const getById = async (id) => {
  return await db('groomer_services')
    .where('groomer_id', id)
    .first().select('*');
};

const create = async (data) => {
  return await db('groomer_services').insert(data).returning('*');
};

const update = async (id, data) => {
  return await db('groomer_services')
    .where('groomer_id', id)
    .first()
    .update(data)
    .returning('*');
};

const remove = async (id) => {
  return await db('groomer_services').where('groomer_id', id).del();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
