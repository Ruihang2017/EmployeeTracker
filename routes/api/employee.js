require('dotenv').config();
const router = require('express').Router();
const db = require('../../db/connection');

router.get('/', (req, res) => {
    const str = `
    SELECT 
        employee.id,
        employee.first_name,
        employee.last_name,
        role.title AS job_title,
        department.name AS departments,
        role.salary AS salary,
        CASE
            WHEN employee.manager_id IS NOT NULL THEN CONCAT(manager.first_name, ' ', manager.last_name)
            ELSE NULL
        END AS manager
    FROM 
        employee 
    JOIN 
        role ON employee.role_id = role.id
    LEFT JOIN 
        department ON role.department_id = department.id
    LEFT JOIN
        employee AS manager ON employee.manager_id = manager.id;`;

    db.query(str, (err, results) => {
        if (err) {
            res.status(500).json({ err: `Err: ${err}` })
        }
        res.status(200).json(results);
    });
})

router.post('/', (req, res) => {
    res.status(200).json({ msg: 'post ok' })
})

module.exports = router;