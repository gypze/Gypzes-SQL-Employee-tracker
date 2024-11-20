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

const updateEmployeeManager = async (employeeId, managerId) => {
  const query = 'UPDATE employee SET manager_id = $1 WHERE id = $2';
  try {
    await pool.query(query, [managerId, employeeId]);
    console.log(`Updated employee ${employeeId}'s manager to ${managerId}`);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const viewEmployeesByManager = async (managerId) => {
  const query = `
    SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, 
           role.salary
    FROM employee e
    JOIN role ON e.role_id = role.id
    JOIN department ON role.department_id = department.id
    WHERE e.manager_id = $1;
  `;
  try {
    const result = await pool.query(query, [managerId]);
    console.table(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const viewEmployeesByDepartment = async (departmentId) => {
  const query = `
    SELECT e.id, e.first_name, e.last_name, role.title, role.salary, m.first_name AS manager
    FROM employee e
    JOIN role ON e.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT JOIN employee m ON e.manager_id = m.id
    WHERE department.id = $1;
  `;
  try {
    const result = await pool.query(query, [departmentId]);
    console.table(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const deleteDepartment = async (departmentId) => {
  const query = 'DELETE FROM department WHERE id = $1';
  try {
    await pool.query(query, [departmentId]);
    console.log(`Deleted department with ID ${departmentId}`);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const deleteRole = async (roleId) => {
  const query = 'DELETE FROM role WHERE id = $1';
  try {
    await pool.query(query, [roleId]);
    console.log(`Deleted role with ID ${roleId}`);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const deleteEmployee = async (employeeId) => {
  const query = 'DELETE FROM employee WHERE id = $1';
  try {
    await pool.query(query, [employeeId]);
    console.log(`Deleted employee with ID ${employeeId}`);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

const viewDepartmentBudget = async (departmentId) => {
  const query = `
    SELECT department.name AS department, SUM(role.salary) AS total_budget
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    WHERE department.id = $1
    GROUP BY department.name;
  `;
  try {
    const result = await pool.query(query, [departmentId]);
    console.table(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

// Export functions
module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  updateEmployeeManager,
  viewEmployeesByManager,
  viewEmployeesByDepartment,
  deleteDepartment,
  deleteRole,
  deleteEmployee,
  viewDepartmentBudget
};


