/* eslint-disable prettier/prettier */
const db = require('../../data/db-config');

const getAll = async () => {
  return await db('pets');
};

const getById = async (id) => {
  return await db('pets').where('id', id).first().select('*');
};

const create = async (data) => {
  return await db('pets').insert(data).returning('*')
};

const update = async (id, data) => {
  return await db('pets').where('id', id).first().update(data).returning('*');
};

const remove = async (id) => {
  return await db('pets').where('id', id).del();
};

module.exports = {
  getAll,
  getById,
  create,
  update, 
  remove,
};