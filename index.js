const inquirer = require('inquirer');
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./queries');

const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee Role',
        'Exit',
      ],
    },
  ]);

  switch (action) {
    case 'View All Departments':
      await viewDepartments();
      break;
    case 'View All Roles':
      await viewRoles();
      break;
    case 'View All Employees':
      await viewEmployees();
      break;
    case 'Add Department':
      const { departmentName } = await inquirer.prompt([
        { name: 'departmentName', type: 'input', message: 'Enter the department name:' }
      ]);
      await addDepartment(departmentName);
      break;
    case 'Add Role':
      const { roleTitle, roleSalary, roleDepartmentId } = await inquirer.prompt([
        { name: 'roleTitle', type: 'input', message: 'Enter the role title:' },
        { name: 'roleSalary', type: 'input', message: 'Enter the role salary:' },
        { name: 'roleDepartmentId', type: 'input', message: 'Enter the department ID for the role:' }
      ]);
      await addRole(roleTitle, roleSalary, roleDepartmentId);
      break;
    case 'Add Employee':
      const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        { name: 'firstName', type: 'input', message: 'Enter the employee first name:' },
        { name: 'lastName', type: 'input', message: 'Enter the employee last name:' },
        { name: 'roleId', type: 'input', message: 'Enter the role ID for the employee:' },
        { name: 'managerId', type: 'input', message: 'Enter the manager ID for the employee (leave blank if none):', default: null }
      ]);
      await addEmployee(firstName, lastName, roleId, managerId);
      break;
    case 'Update Employee Role':
      const { employeeId, newRoleId } = await inquirer.prompt([
        { name: 'employeeId', type: 'input', message: 'Enter the employee ID:' },
        { name: 'newRoleId', type: 'input', message: 'Enter the new role ID for the employee:' }
      ]);
      await updateEmployeeRole(employeeId, newRoleId);
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit();
  }

  mainMenu();
};

mainMenu();
