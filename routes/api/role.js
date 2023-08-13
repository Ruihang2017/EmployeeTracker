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
    res.status(200).json({ msg: 'post ok' })
})

module.exports = router;
