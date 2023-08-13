[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# EmployeeTracker
Welcome to our command-line application built with Node.js, Inquirer, MySQL, and Express. This versatile app empowers users to seamlessly interact with their company's database, comprising employee, role, and department tables. The application's server provides an intuitive interface to effortlessly view and edit information stored in the database. Whether you're exploring employee details, updating roles, or managing departments, this application streamlines database management tasks, making them convenient and efficient. Elevate your company's data management experience with our user-friendly command-line application.

## Link to Video Walkthrough
Below is a link to a video walkthrough of the command line tool. 

https://www.youtube.com/watch?v=G09Jg0avy60


[![Watch the video](https://img.youtube.com/vi/G09Jg0avy60/default.jpg)](https://www.youtube.com/watch?v=G09Jg0avy60)


## Usage
  - Requires `Node v16`
  - Run `npm install` for the required dependency 
  - Run `npm start` to start the tool

  - GIVEN a command-line application that accepts user input

  - WHEN you start the application
  - THEN you am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

  - WHEN you choose to view all departments
  - THEN you are presented with a formatted table showing department names and department ids
  
  - WHEN you choose to view all roles
  - THEN you are presented with the job title, role id, the department that role belongs to, and the salary for that role
  
  - WHEN you choose to view all employees
  - THEN you are presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  
  - WHEN you choose to add a department
  - THEN you are prompted to enter the name of the department and that department is added to the database
  
  - WHEN you choose to add a role
  - THEN you are prompted to enter the name, salary, and department for the role and that role is added to the database
  
  - WHEN you choose to add an employee
  - THEN you are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
  
  - WHEN you choose to update an employee role
  - THEN you are prompted to select an employee to update and their new role and this information is updated in the database