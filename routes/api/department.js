require('dotenv').config();
const router = require('express').Router();
const db = require('../../db/connection');

router.get('/', (req, res) => {
    db.query('SELECT * from department;', (err, results) => {
        if (err) {
            res.status(500).json({ err: `Err: ${err}` });
        } else {
            res.status(200).json(results);
        }
    });
})

router.post('/', (req, res) => {
    const { newDepartmentName } = req.body;
    if (!newDepartmentName) { res.status(400).json({ err: `Bad request.` }); return; }

    db.query('SELECT * from department;', (err, results) => {
        if (err) {
            res.status(500).json({ err: `Err: ${err}` })
        } else {

            const existingDepartment = results.find(row => row.name === newDepartmentName);

            if (existingDepartment) {
                res.status(400).json({ err: `Department already exist.` });
                return;
            } else {

                const str = `
                INSERT INTO department (name)
                VALUES ("${newDepartmentName}");`

                db.query(str, (err, results) => {
                    if (err) {
                        res.status(500).json({ err: `Err: ${err}` })
                    } else {
                        res.status(200).json(results)
                    }
                });
            }
        }
    });
})

module.exports = router;