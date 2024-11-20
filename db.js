require('dotenv').config(); // dotenv is a package that loads environment variables from a .env file into process.env
const { Pool } = require('pg'); // db.js is a file that connects to the database // the database is a PostgreSQL database
 // pg is a node.js driver for PostgreSQL // Pool is a class from pg that allows you to create a pool of connections to the database

// Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: 'localhost',
  port: 5432,
  database: 'company_db',
});

module.exports = pool;
