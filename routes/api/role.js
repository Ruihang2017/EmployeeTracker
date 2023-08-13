require('dotenv').config();
const router = require('express').Router();
const db = require('../../db/connection');

router.get('/', (req, res) => {
    const str = `
    SELECT 
        role.id,
        role.title,
        role.salary,
        department.name AS department 
    FROM 
        role 
    JOIN 
        department ON role.department_id = department.id`;

    db.query(str, (err, results) => {
        if (err) {
            res.status(500).json({ err: `Err: ${err}` })
        }
        res.status(200).json(results);
    });
})

router.post('/', (req, res) => {
    const { name, salary, department } = req.body;
    if (!name || !salary || !department) { res.status(400).json({ err: `Bad request.` }); return; }

    let department_id;
    db.query('SELECT * from department;', (err, results) => {
        if (err) {
            res.status(500).json({ err: `Err1: ${err}` })
            return;
        } else {
            const departmentData = results.find(row => row.name === department);
            if (departmentData) {
                department_id = departmentData.id;

            } else {
                res.status(400).json({ err: `Department not exist.` });
                return;
            }
        }
    })

    db.query('SELECT * from role;', (err, results) => {
        if (err) {
            res.status(500).json({ err: `Err2: ${err}` })
        } else {

            const roleExist = results.find(row => row.name === name);

            if (roleExist) {
                res.status(400).json({ err: `Role already exist.` });
                return;
            } else {

                const str = `
                INSERT INTO role (title, salary, department_id)
                VALUES ("${name}", ${salary}, ${department_id});`
                db.query(str, (err, results) => {
                    if (err) {
                        res.status(500).json({ err: `Err3: ${err}` })
                    } else {
                        res.status(200).json(results)
                    }
                });
            }
        }
    });
})



module.exports = router;
