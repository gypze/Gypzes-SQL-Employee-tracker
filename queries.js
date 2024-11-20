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

const addDepartment = async (name) => {
  const query = 'INSERT INTO department (name) VALUES ($1)';
  try {
    await pool.query(query, [name]);
    console.log(`Added department: ${name}`);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const addRole = async (title, salary, departmentId) => {
  const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
  try {
    await pool.query(query, [title, salary, departmentId]);
    console.log(`Added role: ${title}`);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
  const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
  try {
    await pool.query(query, [firstName, lastName, roleId, managerId]);
    console.log(`Added employee: ${firstName} ${lastName}`);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const updateEmployeeRole = async (employeeId, roleId) => {
  const query = 'UPDATE employee SET role_id = $1 WHERE id = $2';
  try {
    await pool.query(query, [roleId, employeeId]);
    console.log(`Updated employee role with ID ${employeeId}`);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};


// Export functions
module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  };


