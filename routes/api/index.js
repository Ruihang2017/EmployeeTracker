const router = require('express').Router();
const employee = require('./employee');
const role = require('./role');
const department = require('./department');

router.use('/employee', employee);
router.use('/role', role);
router.use('/department', department);


module.exports = router;