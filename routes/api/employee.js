const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: 'ok' });
})

module.exports = router;