-- Seed departments
INSERT INTO department (name) VALUES ('HR'), ('Engineering'), ('Sales');

-- Seed roles
INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 80000, 2),
('Salesperson', 50000, 3),
('HR Specialist', 60000, 1);

-- Seed employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Chester', 'Bennington', 1, NULL),
('Darrell', 'Abbott', 2, 1),
('Manard', 'Keenan', 3, 1);