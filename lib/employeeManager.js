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
    let data;
    switch (toDo) {
        case 'View All Employees':
            return await getEmployee();
        case 'Add Employee':
            data = await cli.addEmployee();
            return await addEmployee(data);
        case 'Update Employee Role':
            employeesNameArray = await getEmployeeNameList();
            roleArray = await getRoleList();
            data = await cli.chooseToUpdateAnEmployee(employeesNameArray, roleArray);
            return await updateEmployee(data);
        case 'View All Roles':
            return await getRole();
        case 'Add Role':
            data = await cli.addRole();
            return await addRole(data);
        case 'View All Departments':
            return await getDepartment();
        case 'Add Department':
            data = await cli.addDepartment();
            return await addDepartment(data);
        case 'Quit':
            return null;
        default:
            break;
    }
}

const getEmployeeNameList = async () => {
    const employees = await getEmployee();
    return employees.map(employee => `${employee.first_name} ${employee.last_name}`);
}

const getRoleList = async () => {
    const roles = await getRole();
    return roles.map(role => `${role.title}`);
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

const addEmployee = async (data) => {
    try {
        const localUrl = url + 'employee/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const res = await fetch(localUrl, options);
        if (!res.ok) {
            const errorMessage = await res.text(); // Extract the error message from the response

            throw new Error(`HTTP error! Status: ${errorMessage}`);
        } else {
            return `Added ${JSON.stringify(data)} to the database`;
        }
    } catch (err) {
        console.error(`Error : ${err}`);
    }
}

const updateEmployee = async (data) => {
    try {
        const localUrl = url + 'employee/';
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const res = await fetch(localUrl, options);
        if (!res.ok) {
            const errorMessage = await res.text(); // Extract the error message from the response

            throw new Error(`HTTP error! Status: ${errorMessage}`);
        } else {
            return `Updated ${JSON.stringify(data)} to the database`;
            // return res;
        }
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

const addRole = async (data) => {
    try {
        const localUrl = url + 'role/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const res = await fetch(localUrl, options);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return `Added ${JSON.stringify(data)} to the database`;
        // return await res.json();

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
            body: JSON.stringify(data),
        }
        const res = await fetch(localUrl, options);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return `Added ${data.newDepartmentName} to the database`;
    } catch (err) {
        console.error(`Error : ${err}`);
    }
}



module.exports = { employeeManager };