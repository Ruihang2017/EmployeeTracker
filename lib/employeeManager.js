const fetch = require('node-fetch');


const employeeManager = async (toDo) => {
    console.log(`To do ${toDo}`);
    getEmployee();
    createEmployee();

}

async function getEmployee() {
    try {
        const url = 'http://localhost:3001/api/employee/';
        const res = await fetch(url);

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const resJSON = await res.json();
        console.log(resJSON);

    } catch (err) {
        console.error('Error:', err);
    }
}



async function createEmployee(data) {
    const url = 'http://localhost:3001/api/employee/';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data),
    };

    try {
        const res = await fetch(url, options);

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const resJSON = await res.json();
        console.log(resJSON);
    } catch (err) {
        console.error('Error:', err);
    }
}


module.exports = { employeeManager };