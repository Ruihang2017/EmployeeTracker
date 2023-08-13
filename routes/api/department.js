require('dotenv').config();
const router = require('express').Router();
const db = require('../../db/connection');

router.get('/', (req, res) => {
    db.query('SELECT * from department;', (err, results) => {
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