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
    // console.info(req.body.)
    const { newDepartmentName } = req.body;
    if (!newDepartmentName) { res.status(400).json({ err: `Bad request.` }); return; }

    db.query('SELECT * from department;', (err, results) => {
        if (err) {
            res.status(500).json({ err: `Err: ${err}` })
        } else {

            const existingDepartment = results.find(role => role.name === newDepartmentName);

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


// function addRole(newRole) {
//     // Check for existing role with the same id or name
//     const existingRole = roles.find(role => role.id === newRole.id || role.name === newRole.name);

//     if (existingRole) {
//         console.log('Role already exists with the same id or name.');
//     } else {
//         roles.push(newRole);
//         console.log('Role added successfully.');
//     }
// }

// const newRole = { id: 5, name: 'Marketing' }; // Change this as needed

// addRole(newRole);
// console.log(roles);

// notes.post('/', (req, res) => {
//     const { title, text } = req.body;
//     if (title && text) {
//         const newTask = {
//             title,
//             text,
//             id: uuid(),
//         }
//         console.log(`id = ${newTask.id}`)
//         fs.readFile('./db/db.json', 'utf8').then(data => {
//             const parseData = JSON.parse(data);
//             parseData.push(newTask);
//             fs.writeFile('./db/db.json', JSON.stringify(parseData, null, 4), 'utf8', (err) => {
//                 if (err) {
//                     res.status(500).json({ error: 'An error occured serverside' });
//                 } else {
//                     console.info(`Data writted successful to ./db/db.json`);
//                 }
//             });
//         }).catch(err => {
//             res.status(500).json({ error: 'An error occured serverside' });
//         });

//         const response = {
//             status: 'success',
//             body: newTask,
//         };

//         res.status(200).json(response);
//     }
// });
