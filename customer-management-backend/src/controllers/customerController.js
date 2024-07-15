const customerModel = require('../models/customerModel');

const getAllCustomers = async (req, res) => {
  try {
    const customers = await customerModel.getAllCustomers();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await customerModel.getCustomerById(req.params.id);
    if (!customer) {
      res.status(404).json({ error: 'Customer not found' });
    } else {
      res.json(customer);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCustomer = async (req, res) => {
  try {
    const newCustomer = await customerModel.addCustomer(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await customerModel.updateCustomer(req.params.id, req.body);
    if (!updatedCustomer) {
      res.status(404).json({ error: 'Customer not found' });
    } else {
      res.json(updatedCustomer);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    await customerModel.deleteCustomer(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
