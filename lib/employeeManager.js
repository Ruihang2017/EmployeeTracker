const fetch = require('node-fetch');
const url = 'http://localhost:3001/api/';
const inquirer = require('inquirer');
const CLI = require("./cli");

// create a new cli instance
const cli = new CLI();

const employeeManager = async () => {
    const { toDo } = await cli.toDo();
    result = await toDoTask(toDo);
    if (result) {
        console.table(result);
        employeeManager();
    }
}


const toDoTask = async (toDo) => {
    switch (toDo) {
        case 'View All Employees':
            return await getEmployee();
        case 'Add Employee':
            break;
        case 'Update Employee Role':
            break;
        case 'View All Roles':
            return await getRole();
        case 'Add Role':
            break;
        case 'View All Departments':
            return await getDepartment();
        case 'Add Department':
            break;
        case 'Quit':
            return null;
        default:
            break;
    }
}


const getEmployee = async () => {
    try {
        const localUrl = url + 'employee/';
        const res = await fetch(localUrl);
        if (!res.ok) { throw new Error(`HTTP error! Status: ${res.status}`); }
        return await res.json();
    } catch (err) {
        console.error(`Error : ${err}`);
    }
}

const getRole = async () => {
    try {
        const localUrl = url + 'role/';
        const res = await fetch(localUrl);
        if (!res.ok) { throw new Error(`HTTP error! Status: ${res.status}`); }
        return await res.json();
    } catch (err) {
        console.error(`Error : ${err}`);
    }
}

const getDepartment = async () => {
    try {
        const localUrl = url + 'department/';
        const res = await fetch(localUrl);
        if (!res.ok) { throw new Error(`HTTP error! Status: ${res.status}`); }
        return await res.json();
    } catch (err) {
        console.error(`Error : ${err}`);
    }
}

const addDepartment = async (data) => {
    try {
        const localUrl = url + 'department/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(data),
        }
        const res = await fetch(localUrl, options);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const resJSON = await res.json();
        console.log(resJSON);
    } catch (err) {
        console.err(`Error : ${err}`);
    }
}

const createEmployee = async (data) => {
    try {
        const url = 'http://localhost:3001/api/employee/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(data),
        }
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const resJSON = await res.json();
        console.log(resJSON);
    } catch (err) {
        console.err(`Error : ${err}`);
    }
}


module.exports = { employeeManager };