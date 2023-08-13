const inquirer = require('inquirer');
// const { writeFile } = require('fs/promises');
const { employeeManager } = require('./employeeManager');
// const { join } = require('path');

// create a client class
class CLI {
    constructor() {
        // console.log("A new CLI");
    }

    toDo() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'toDo',
                    message: 'What would you like to do?',
                    choices: [
                        'View All Employees',
                        'Add Employee',
                        'Update Employee Role',
                        'View All Roles',
                        'Add Role',
                        'View All Departments',
                        'Add Department',
                        'Quit',
                    ]
                }
            ])
    }

    addDepartment() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'newDepartmentName',
                    message: 'Enter the name for the new department.',
                }
            ])
    }

    addRole() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name for the new role.',
                },
                {
                    type: 'number',
                    name: 'salary',
                    message: 'Enter the salary for the new role.',
                },
                {
                    type: 'input',
                    name: 'department',
                    message: 'Enter the department for the new role.',
                }
            ])
    }

    addEmployee() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the first name for the new employee.',
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the last name for the new employee.',
                },
                {
                    type: 'input',
                    name: 'role',
                    message: 'Enter the role for the new employee.',
                },
                {
                    type: 'input',
                    name: 'manager',
                    message: 'Enter the manager for the new employee.',
                }
            ])
    }

    chooseToUpdateAnEmployee(employeesNames, roleArray) {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'name',
                    message: 'Which employee would you like to update?',
                    choices: employeesNames
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'What is the new role?',
                    choices: roleArray,
                }
            ])
    }


}

module.exports = CLI;