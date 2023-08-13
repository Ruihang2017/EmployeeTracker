const fetch = require('node-fetch');
const url = 'http://localhost:3001/api/';


const employeeManager = async (toDo) => {
    console.log(`To do ${toDo}`);
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