// const router = require('express').Router();
// const bookRoutes = require('./bookRoutes');

// router.use('/books', bookRoutes);

// module.exports = router;

const router = require('express').Router();
const employee = require('./employee');

router.use('/employee', employee)

module.exports = router;