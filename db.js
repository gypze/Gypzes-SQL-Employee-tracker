const { Pool } = require('pg'); // db.js is a file that connects to the database // the database is a PostgreSQL database
 // pg is a node.js driver for PostgreSQL // Pool is a class from pg that allows you to create a pool of connections to the database

// Database connection
const pool = new Pool({
  user:'postgres',
  password: 'Unidoomslayer',
  host: 'localhost',
  port: 5432,
  database: 'company_db',
});

module.exports = pool;
