const pool = require('./db');

const viewDepartments = async () => {
  try {
    const result = await pool.query('SELECT * FROM department');
    console.table(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const viewRoles = async () => {
  const query = `
    SELECT role.id, role.title, role.salary, department.name AS department
    FROM role
    JOIN department ON role.department_id = department.id;
  `;
  try {
    const result = await pool.query(query);
    console.table(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const viewEmployees = async () => {
  const query = `
    SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, 
           role.salary, m.first_name AS manager
    FROM employee e
    JOIN role ON e.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT JOIN employee m ON e.manager_id = m.id;
  `;
  try {
    const result = await pool.query(query);
    console.table(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

// Export functions
module.exports = { viewDepartments, viewRoles, viewEmployees };


