const fetch = require('node-fetch');


const employeeManager = async (toDo) => {
    console.log(`To do ${toDo}`);
    getEmployee();
    createEmployee(toDo);

}

const getEmployee = async () => {
    try {
        const url = 'http://localhost:3001/api/employee/';
        const res = await fetch(url);
        if (!res.ok) { throw new Error(`HTTP error! Status: ${res.status}`); }
        const resJSON = await res.json();
        console.log(resJSON);
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