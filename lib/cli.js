const inquirer = require('inquirer');
// const { writeFile } = require('fs/promises');
const { employeeManager } = require('./employeeManager');
// const { join } = require('path');

// create a client class
class CLI {
    constructor() {
        console.log("A new CLI");
    }
    run() {
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
                    ]
                }
            ])
            .then(({ toDo }) => {
                // create a svg file
                // return writeFile(
                //     join(__dirname, '..', 'examples', `${fileName}.svg`),
                //     createSVG({ text, textColour, shapeType, shapeColour })
                // );
                employeeManager(toDo);
                // console.log(`toDo: ${toDo}`);
            })
            .catch(err => console.error(err));
    }
}

module.exports = CLI;