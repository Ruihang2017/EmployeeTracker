const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: 'get ok' });
})

router.post('/', (req, res) => {
    res.status(200).json({ msg: 'post ok' })
})

module.exports = router;