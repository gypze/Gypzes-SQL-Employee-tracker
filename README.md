# Gypzes-SQL-Employee-tracker

# SQL Employee Tracker

## Description

This is a command-line application built from scratch that allows business owners to view and manage departments, roles, and employees in their company. This application uses Node.js, Inquirer, and PostgreSQL to create an easy-to-use interface for non-developers to interact with employee information stored in a database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Demo Video](#demo-video)
- [Database Schema](#database-schema)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Set up your PostgreSQL database 
5. Run the schema and seed files to set up your database tables and sample data.

## Usage

1. In the terminal, navigate to the project directory.
2. Run the command `node index.js` to start the application.
3. Use the arrow keys to navigate through the menu options.
4. Select an option by pressing Enter.
5. Follow the prompts to view, add, update, or delete information in the database.

## Features

- View all departments, roles, and employees
- Add new departments, roles, and employees
- Update employee roles
- Delete departments, roles, and employees
- View employees by manager
- View employees by department
- View the total utilized budget of a department

## Demo Video

To see the SQL Employee Tracker in action, check out my demo video:

https://www.youtube.com/watch?v=SaxDjoZt8HY


## Database Schema

The database contains the following tables:

- `department`: id (Primary Key), name
- `role`: id (Primary Key), title, salary, department_id (Foreign Key)
- `employee`: id (Primary Key), first_name, last_name, role_id (Foreign Key), manager_id (Foreign Key)

## Technologies Used

- Node.js
- Inquirer.js
- PostgreSQL
- Console.table (for formatting output)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Questions

If you have any questions about the repo, open an issue or contact me directly at Gypzemoon@gmail.com. 
