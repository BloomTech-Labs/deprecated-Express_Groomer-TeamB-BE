const express = require('express');
//const authRequired = require('../middleware/authRequired');
const customer = require('./customersModel.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await customer.getAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await customer.getById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    //checking to see if user already exists
    const user = await customer.findById(req.params.id);
    if (user === undefined) {
      //if undefined add user
      const new_user = await customer.create(req.body);
      res
        .status(200)
        .json({ message: 'Customer profile created', Profile: new_user });
    } else {
      res.status(400).json({ message: 'Profile already exists' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    //checking to see if user already exists
    const user = await customer.findById(req.body.id);
    if (user !== undefined) {
      //if not undefined update user
      const edits = await customer.update(req.params.id, req.body);
      res
        .status(200)
        .json({ message: 'Customer profile updated', Profile: edits });
    } else {
      res.status(400).json({ message: 'Profile does not exists' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(404).json({ message: 'Missing required id.' });
    }
    await customer.remove(req.params.id);
    res.status(200).json({ message: 'User was deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
