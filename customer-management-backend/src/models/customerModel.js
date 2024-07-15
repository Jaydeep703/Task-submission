const pool = require('../config/database');

const getAllCustomers = async () => {
  const result = await pool.query('SELECT * FROM customers');
  return result.rows;
};

const getCustomerById = async (id) => {
  const result = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);
  return result.rows[0];
};

const addCustomer = async (customer) => {
  const result = await pool.query(
    'INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
    [customer.name, customer.email, customer.phone]
  );
  return result.rows[0];
};

const updateCustomer = async (id, customer) => {
  const result = await pool.query(
    'UPDATE customers SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *',
    [customer.name, customer.email, customer.phone, id]
  );
  return result.rows[0];
};

const deleteCustomer = async (id) => {
  await pool.query('DELETE FROM customers WHERE id = $1', [id]);
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
