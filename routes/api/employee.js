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
    const { firstName, lastName, role, manager } = req.body;

    if (!firstName || !lastName || !role || !manager) { res.status(400).json({ err: `Bad request.` }); return; }

    let role_id_id, manager_id;
    const managerName = manager.split(' ');

    db.query(`SELECT * FROM role WHERE title = ?;`, role,
        (err, results) => {
            if (err) {
                res.status(500).json({ err: `Err1: ${err}` });
                return;
            } else {
                role_id_id = results[0].id;
                db.query(`
                SELECT * 
                FROM employee
                WHERE first_name = ? AND last_name = ?;`,
                    managerName,
                    (err, results) => {
                        if (err) {
                            res.status(500).json({ err: `Err1: ${err}` });
                            return;
                        } else {
                            manager_id = results[0].id;
                            db.query(`
                                INSERT INTO employee (first_name, last_name, role_id, manager_id)
                                VALUES (?, ?, ?, ?);`,
                                [firstName, lastName, role_id_id, manager_id],
                                (err, results) => {
                                    if (err) {
                                        res.status(500).json({ err: `Err1: ${err}` });
                                        return;
                                    } else {
                                        res.status(200).json(results);
                                    }
                                })
                        }
                    })
            }
        })
})


router.put('/', (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) { res.status(400).json({ err: `Bad request.` }); return; }
    const [firstName, lastName] = name.split(' ');
    console.log(firstName);
    console.log(lastName);

    let role_id;
    db.query(`SELECT * FROM role WHERE title = ?;`, role,
        (err, results) => {
            if (err) {
                res.status(500).json({ err: `Err1: ${err}` });
                return;
            } else {
                role_id = results[0].id;
                db.query(`
                    UPDATE employee
                    SET role_id = ?
                    WHERE first_name = ? AND last_name = ?;`,
                    [role_id, firstName, lastName],
                    (err, results) => {
                        if (err) {
                            res.status(500).json({ err: `Err2: ${err}` });
                            return;
                        } else {
                            res.status(200).json(results);
                        }
                    })

            }
        })
})

module.exports = router;