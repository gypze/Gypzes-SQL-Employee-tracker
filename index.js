const inquirer = require('inquirer');
const {
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
        'Update Employee Manager',
        'View Employees by Manager',
        'View Employees by Department',
        'Delete Department',
        'Delete Role',
        'Delete Employee',
        'View Department Budget',
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
    case 'Update Employee Manager':
      const { employeeId, managerId } = await inquirer.prompt([
        { name: 'employeeId', type: 'input', message: 'Enter the employee ID:' },
        { name: 'managerId', type: 'input', message: 'Enter the new manager ID:' }
      ]);
      await updateEmployeeManager(employeeId, managerId);
      break;
    case 'View Employees by Manager':
      const { managerIdToView } = await inquirer.prompt([
        { name: 'managerIdToView', type: 'input', message: 'Enter the manager ID:' }
      ]);
      await viewEmployeesByManager(managerIdToView);
      break;
    case 'View Employees by Department':
      const { departmentIdToView } = await inquirer.prompt([
        { name: 'departmentIdToView', type: 'input', message: 'Enter the department ID:' }
      ]);
      await viewEmployeesByDepartment(departmentIdToView);
      break;
    case 'Delete Department':
      const { departmentIdToDelete } = await inquirer.prompt([
        { name: 'departmentIdToDelete', type: 'input', message: 'Enter the department ID to delete:' }
      ]);
      await deleteDepartment(departmentIdToDelete);
      break;
    case 'Delete Role':
      const { roleIdToDelete } = await inquirer.prompt([
        { name: 'roleIdToDelete', type: 'input', message: 'Enter the role ID to delete:' }
      ]);
      await deleteRole(roleIdToDelete);
      break;
    case 'Delete Employee':
      const { employeeIdToDelete } = await inquirer.prompt([
        { name: 'employeeIdToDelete', type: 'input', message: 'Enter the employee ID to delete:' }
      ]);
      await deleteEmployee(employeeIdToDelete);
      break;
    case 'View Department Budget':
      const { departmentIdToBudget } = await inquirer.prompt([
        { name: 'departmentIdToBudget', type: 'input', message: 'Enter the department ID to view budget:' }
      ]);
      await viewDepartmentBudget(departmentIdToBudget);
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit();
  }

  mainMenu();
};

mainMenu();
