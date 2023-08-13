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
        // .then(({ toDo }) => {
        //     employeeManager(toDo).then(data => {
        //         console.log('\n');
        //         console.table(data);
        //     })

        //     this.run();
        // })
        // .catch(err => console.error(err));
    }

    addDepartment() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'newDepartmentName',
                    message: 'Enter the name for a new department.',
                }
            ])
    }

}

module.exports = CLI;